import React from "react"
import PropTypes from 'prop-types'

function Friend(props){
  return(
    <React.Fragment>
      <div className='friend'>
        <h3> {props.firstName} {props.lastName}</h3>
        <h3> Email: {props.email}</h3>
        <h3> Phone: {props.phone}</h3>
        <button>click Here</button>
      </div>
    </React.Fragment>
  );
}

Friend.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string
};

export default Friend;