import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Switcher = props => {
  return (
    <div className='my-3'>
      <h3>Game Mode</h3>
      <span className='switch-label d-none d-md-inline'>{props.gameModes[0]}</span>
      <span className='switch-label d-md-none'>{props.gameModes[0].charAt(0).toUpperCase()}</span>
      <label className="switch">
        <input type="checkbox"
          className='switch-input'
          onChange={props.switchModeHandler} />
        <span className="slider"></span>
      </label>
      <span className='switch-label d-none d-md-inline'>{props.gameModes[1]}</span>
      <span className='switch-label d-md-none'>{props.gameModes[1].charAt(0).toUpperCase()}</span>
    </div>
  )
}

Switcher.propTypes = {
  gameModes: PropTypes.arrayOf(PropTypes.string),
  switchModeHandler: PropTypes.func,
}

export default Switcher
