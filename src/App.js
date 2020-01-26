import React, { useEffect, useState } from 'react'
import Card from './components/card/Card'
import Control from './components/control/Control'
import Loader from './components/loader/Loader'
import { cardReducer } from './reducers/card-reducer'
import { getAllPeople, getPerson, getAllStarships, getStarship } from './services/card-service'
import './styles.scss'

const initialState = {
  cards: new Array(2),
  mode: 'people',
  winner: null,
  score: [0, 0],
  totalCards: 0,
}

function App() {

  const [data, dispatch] = React.useReducer(cardReducer, initialState)
  const [loading, setLoading] = useState(false)

  const getCardsToPlay = () => {
    setLoading(true)
    let cardSearchArray = [...data.cards]
      .map(() => Math.floor(Math.random() * data.totalCards) + 1)

    const cardPromises = (data.mode === 'people') ?
      cardSearchArray.map(cardId => getPerson(cardId)) :
      cardSearchArray.map(cardId => getStarship(cardId))

    Promise.all(cardPromises)
      .then(resps => {
        const jsonResps = resps.map(resp => resp.json());
        Promise.all(jsonResps).then(cards => {
          // Filter duff cards
          if (cards.filter(card => card.name && card.mass !== 'unknown').length === data.cards.length) {
            dispatch({ type: 'SET_CARDS', cards })
            setLoading(false)
          }
          else
            getCardsToPlay()
        })
      })

  }

  const switchGameMode = () => {
    dispatch({ type: 'SWITCH_MODE' })
  }

  const getTotalPeopleCards = () => {
    getAllPeople()
      .then(res => res.json())
      .then(res => {
        dispatch({ type: 'SET_TOTAL_CARDS', totalCards: res.count })
      })
  }

  const getStarshipCards = () => {
    getAllStarships()
      .then(res => res.json())
      .then(res => {
        dispatch({ type: 'SET_TOTAL_CARDS', totalCards: res.count })
      })
  }

  useEffect(() => {
    dispatch({ type: 'GET_WINNER' })
  }, [data.cards])

  useEffect(() => {
    data.mode === 'people' ?
      getTotalPeopleCards() :
      getStarshipCards()
  }, [data.mode])

  return (
    <div className='app'>
      {loading && <Loader />}
      <div className={loading ? 'dim' : ''}>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1>Star Wars Game</h1>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1 className='py-1'>Game Cards</h1>
            </div>
          </div>
          <div className='row justify-content-center'>
            {[...data.cards].map((card, idx) =>
              <div className='col-3' key={idx}>
                <Card card={card}
                  gameMode={data.mode}
                  isWinner={data.winner === idx}
                  isDraw={data.winner === -1} />
              </div>)}
          </div>
        </div>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-5 col-center'>
              <Control
                score={data.score}
                newGameHandler={getCardsToPlay}
                switchModeHandler={switchGameMode}
                submitButtonLabel='New Cards' />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App;
