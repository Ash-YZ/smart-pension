import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import Score from '../score/Score'
import Switcher from '../switcher/Switcher'

const Control = props => {
  return (
    <div className='container' >
      <div className='row justify-content-center'>
        <div className='col-lg-6 col-md-8 col-sm-12 col-center'>
          <div className='control'>
            <Score score={props.score} />
            <Switcher gameMode='people'
              switchModeHandler={props.switchModeHandler}
              gameModes={['people', 'starship']} />
            <button type="button"
              className="ctrl-button btn btn-success w-100"
              onClick={props.newGameHandler}>{props.submitButtonLabel}</button>
          </div>
        </div>
      </div>
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
