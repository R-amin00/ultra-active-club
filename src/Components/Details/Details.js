import React from 'react';
import './Details.css';

function Details({times , breakTimes}) {
  return (
    <div>
        <h4>Excercise Details</h4>
        <div className='display-field'>
            <h5>Excercise Time</h5>
            <p className='text-gray'>{times} seconds</p>
        </div>
        <div className='display-field'>
            <h5>Break Time</h5>
            <p className='text-gray'>{breakTimes} seconds</p>
        </div>
    </div>
  )
}

export default Details