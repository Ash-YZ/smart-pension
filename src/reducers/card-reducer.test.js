import { cardReducer } from './card-reducer'

describe('Card reducer', () => {
  it('SET_TOTAL_CARDS should set total numner of cards', () => {
    const state = { totalCards: 0 }
    const totalCards = 10

    const newState = cardReducer(state, {
      type: 'SET_TOTAL_CARDS', totalCards,
    })
    expect(newState).toEqual({ totalCards: 10 })
  })

  it('SET_CARDS should set game cards', () => {
    const cards = [1, 2]
    const state = { cards: [] }

    const newState = cardReducer(state, {
      type: 'SET_CARDS', cards
    })
    expect(newState).toEqual({ cards })
  })

  it('SWITCH_MODE should change game mode', () => {
    const mode = 'people'
    const cards = [{ test: 1 }, { test: 2 }]
    const state = { mode, cards }

    const newState = cardReducer(state, { type: 'SWITCH_MODE' })
    expect(newState).toEqual({ mode: 'starship', cards: new Array(2) })
  })

  it('GET_WINNER should find winning card index', () => {
    const cards = [
      { name: 'a', mass: '10' },
      { name: 'b', mass: '20' }
    ]
    const mode = 'people'
    const score = [0, 0]
    const state = { cards, mode, score }

    const newState = cardReducer(state, {
      type: 'GET_WINNER', cards
    })
    expect(newState).toEqual({ cards, mode, winner: 1, score: [0, 1] })
  })


  it('GET_WINNER should declare a draw if 2 cards are equal', () => {
    const cards = [
      { name: 'a', mass: '10' },
      { name: 'b', mass: '10' }
    ]
    const mode = 'people'
    const score = [0, 0]
    const state = { cards, mode, score }

    const newState = cardReducer(state, {
      type: 'GET_WINNER', cards
    })
    expect(newState).toEqual({ cards, mode, winner: -1, score })
  })

  it('SET_SCORE should update score if there is a winner', () => {
    const score = [0, 0]
    const winner = 1

    const state = { score, winner }

    const newState = cardReducer(state, { type: 'SET_SCORE' })
    expect(newState).toEqual({ score: [0, 1], winner })
  })

  it('SET_SCORE should not update score if it is a draw', () => {
    const score = [0, 0]
    const winner = -1

    const state = { score, winner }

    const newState = cardReducer(state, { type: 'SET_SCORE' })
    expect(newState).toEqual({ score, winner })
  })
})