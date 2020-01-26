import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Card = props => {
  return (
    <div className={`card ${props.isWinner ? 'winner' : ''} ${props.isDraw ? 'draw' : ''}`}>
      <div className="card-body">
        <h5 className="card-title">{props.card ? props.card.name : '-----'}</h5>
        {props.gameMode === 'people' ?
          <p className="card-text">Mass: {props.card ? props.card.mass : '-----'}</p> :
          <p className="card-text">Crew: {props.card ? props.card.crew : '-----'}</p>}
      </div>
    </div>
  )
}

Card.propTypes = {
  gameMode: PropTypes.string,
  card: PropTypes.shape({
    name: PropTypes.string,
    mass: PropTypes.string,
    crew: PropTypes.string,
  }),
  isWinner: PropTypes.bool,
  isDraw: PropTypes.bool
}

export default Card;