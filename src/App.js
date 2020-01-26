import React, { useEffect, useState } from 'react'
import Card from './components/card/Card'
import Control from './components/control/Control'
import Loader from './components/loader/Loader'
import Title from './components/title/Title'
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

  const switchGameMode = () => {
    dispatch({ type: 'SWITCH_MODE' })
  }

  const getTotalCards = async (mode) => {
    setLoading(true)
    const resp = mode === 'people' ?
      await (await getAllPeople()).json() :
      await (await getAllStarships()).json()
    dispatch({ type: 'SET_TOTAL_CARDS', totalCards: resp.count })
    setLoading(false)
  }

  const getCardsToPlay = async () => {
    setLoading(true)
    let cardSearchArray = [...data.cards].map(() => Math.floor(Math.random() * data.totalCards) + 1)
    const cardPromises = await data.mode === 'people' ? cardSearchArray.map(cardId => getPerson(cardId)) : cardSearchArray.map(cardId => getStarship(cardId))
    const resps = await Promise.all(cardPromises)
    const jsonResps = resps.map(resp => resp.json())
    const cards = await Promise.all(jsonResps)
    // Only use valid cards - must have a name and a mass
    if (cards.filter(card => !!card.name && card.mass !== 'unknown').length === data.cards.length)
      dispatch({ type: 'SET_CARDS', cards })
    else
      getCardsToPlay()
  }

  useEffect(() => {
    setLoading(false)
    dispatch({ type: 'GET_WINNER' })
  }, [data.cards])

  useEffect(() => {
    getTotalCards(data.mode)
  }, [data.mode])

  return (
    <div className='app'>
      {loading && <Loader />}
      <div className={loading ? 'dim' : ''}>
        <Title title='STAR WARS' isMain />
        <Title title='Game Cards' />
        <div className='container'>
          <div className='row justify-content-center'>
            {[...data.cards].map((card, idx) =>
              <div className='col-lg-3 col-md-4 col-6' key={idx}>
                <Card card={card}
                  gameMode={data.mode}
                  isWinner={data.winner === idx}
                  isDraw={data.winner === -1} />
              </div>)}
          </div>
        </div>
        <Control
          score={data.score}
          newGameHandler={getCardsToPlay}
          switchModeHandler={switchGameMode}
          submitButtonLabel='New Cards' />
      </div>
    </div>
  )
}

export default App;

