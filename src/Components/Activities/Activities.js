import React, { useEffect, useState } from 'react'
import ActivityCart from '../ActivityCart/ActivityCart';
import Exercise from '../Excercise/Excercise';
import './Activities.css';

function Activities() {

  const [activities, setActivities] = useState([]);
  const [times, setTimes] = useState(0);

  useEffect(() => {
    fetch("fakeData.json")
    .then(res => res.json())
    .then(data => setActivities(data))
  }, [])

  const handleAddList = (time) => {
    const numTime = parseInt(time);
    let newTimes = times + numTime;
    // console.log(typeof newTimes)
    setTimes(newTimes);

  }
  return (
    <div className='activity-area'>
        <div className='club-container'>
          <div className='club-heading'>
            <h1>ULTRA-ACTIVE-CLUB</h1>
            <h5>Select today's exercise</h5>
          </div>
          <div className='activity-container'>
            {
              activities.map(activity => <Exercise
                key={activity.id} 
                activity={activity}
                handleAddList={handleAddList}
              ></Exercise>)
              }
          </div>
          <div className='activity-cart-container'>
              <ActivityCart times={times}></ActivityCart>
          </div>
    </div>
    </div>
  )
}

export default Activities;