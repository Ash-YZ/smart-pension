import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import Score from '../score/Score'
import Switcher from '../switcher/Switcher'

const Control = props => {
  return (
    <div className='control'>
      <Score score={props.score} />
      <Switcher gameMode='people'
        switchModeHandler={props.switchModeHandler}
        gameModes={['people', 'starship']} />
      <button type="button"
        className="ctrl-button btn btn-success w-100"
        onClick={props.newGameHandler}>{props.submitButtonLabel}</button>
    </div>
  )
}

Control.propTypes = {
  score: PropTypes.arrayOf(PropTypes.number),
  newGameHandler: PropTypes.func,
  switchModeHandler: PropTypes.func,
  submitButtonLabel: PropTypes.string
}

export default Control
