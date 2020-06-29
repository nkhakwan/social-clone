import React from 'react'
import PropTypes from 'prop-types'

function Post(props){
  return(
    <div className='post'>
      <h4> {props.body} </h4>
      <p> {props.body} </p>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
}
export default Post