import React from 'react';
import imagePerson from '../../person.jpg';
import './Person.css';

function Person() {
  return (
    <div>
        <div className="person">
            <img src={imagePerson} alt="" />
            <div className="person-info">
                <h3 className='name'>Zahid Hossain</h3>
                <p className='location'>Sydney, Australia</p>
            </div>
        </div>
    </div>
  )
}

export default Person