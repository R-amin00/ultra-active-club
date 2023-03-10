import React from 'react';
import './BodyIndex.css';

function BodyIndex() {
  return (
    <div>
        <div className="body-index">
            <div className='each-unit'>
                <div className='adjust'>
                <h2 className='number'>75</h2>
                <p className='unit'><small>kg</small></p>
                </div>
                <p className='body-unit'><small>Weight</small></p>
            </div>
            <div className='each-unit'>
                <h2 className='number'>6.5</h2>
                <p className='body-unit'><small>Height</small></p>
            </div>
            <div className='each-unit'>
                <div className='adjust'>
                <h2 className='number'>25</h2>
                <p className='unit'><small>yrs</small></p>
                </div>
                <p className='body-unit'><small>Age</small></p>
            </div>
        </div>
    </div>
  )
}

export default BodyIndex