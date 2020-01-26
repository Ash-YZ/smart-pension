import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Score = props => {
  return (
    <div className='score'>
      <h2>Score</h2>
      <div className='container'>
        {props.score.map((scr, idx) =>
          <div key={`score-${idx}`} className='row justify-content-center'>
            <>
              <div className='col-6 text-left'>
                <h2>Player {idx + 1}:</h2>
              </div>
              <div className='col-6 text-right'>
                <h2>{scr}</h2>
              </div>
            </>
          </div>
        )}
      </div>
    </div>
  )
}

Score.propTypes = {
  score: PropTypes.arrayOf(PropTypes.number)
}

export default Score
