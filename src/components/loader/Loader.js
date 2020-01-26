import React from 'react'
import './styles.scss'

const Loader = _ => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <div className="face">
          <div className="circle"></div>
        </div>
        <div className="face">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader