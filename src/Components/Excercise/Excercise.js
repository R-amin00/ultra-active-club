import React from 'react'
import './Excercise.css';

function Exercise({activity, handleAddList}) {
    const {name, img, description, age, time} = activity;

  return (
    <div className='exercise-container'>
        <img src={img} alt="" />
        <h4>{name}</h4>
        <p className='desc'>{description}</p>
        <p>For age: <span className="bold-text"> {age}</span></p>
        <p>Time required:  <span className="bold-text">{time}s</span></p>
        <button className='btn-add' onClick={() => handleAddList(activity.time)}>Add to list</button>
    </div>
  )
}

export default Exercise;