import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Title = props => {

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          {props.isMain ?
            <h1>{props.title}</h1> :
            <h2>{props.title}</h2>
          }
        </div>
      </div>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string,
  isMain: PropTypes.bool
}

export default Title