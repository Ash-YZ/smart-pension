export const cardReducer = (state, action) => {
  if (action.type === 'SET_TOTAL_CARDS') {
    return { ...state, totalCards: action.totalCards };
  }

  if (action.type === 'SET_CARDS') {
    return { ...state, cards: action.cards };
  }

  if (action.type === 'SWITCH_MODE') {
    const mode = state.mode === 'starship' ? 'people' : 'starship'
    const cards = new Array(2)
    return { ...state, mode, cards };
  }

  if (action.type === 'GET_WINNER') {
    let winner;
    const cards = state.cards
    let score = state.score

    if (!!cards[0]) {
      const fightAttrributes = cards.map(
        card => state.mode === 'people' ?
          parseInt(card.mass.replace(/,/g, '')) :
          parseInt(card.crew.replace(/,/g, '')) //Remove commas from numbers
      )

      // Check for draw
      if ([...new Set(fightAttrributes)].length === fightAttrributes.length)
        winner = fightAttrributes.indexOf(Math.max(...fightAttrributes));
      else winner = -1

      if (winner > -1) score = score.map((scr, idx) => idx === winner ? scr + 1 : scr)
    }
    return { ...state, winner, score };
  }

  if (action.type === 'SET_SCORE') {
    let score = state.score
    if (state.winner > -1)
      score = state.score.map((scr, idx) => idx === state.winner ? ++scr : scr)
    return { ...state, score }
  }

  throw new Error();
};