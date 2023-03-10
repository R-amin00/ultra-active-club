import React, { useState } from 'react'
import BodyIndex from '../BodyIndex/BodyIndex';
import BreakTimes from '../BreakTimes/BreakTimes';
import Details from '../Details/Details';
import Person from '../Person/Person';
import './ActivityCart.css';

function ActivityCart({times}) {
  // console.log(times)
  const [breakingTimes, setBreakingTimes] = useState(0);

  const handleAddTime = () => {
    if(breakingTimes >= 0){
      let newBreakTime = breakingTimes * 0 + 10;
      setBreakingTimes(newBreakTime);
    }
    else{
      alert('already added');
    }
  }

  const handleAddTimeS = () => {
    if(breakingTimes >= 0) {
      let newBreakTime = breakingTimes * 0 + 20;
      setBreakingTimes(newBreakTime);
    }
    else {
      alert('already added')
    }
  }

  const handleAddTimeT = () => {
    if(breakingTimes >= 0) {

      let newBreakTime = breakingTimes * 0 + 30;
      setBreakingTimes(newBreakTime);
    }
    else {
      alert('already added')
    }
  }

  const handleAddTimeF = () => {
    if(breakingTimes >= 0) {

      let newBreakTime = breakingTimes * 0 + 40;
      setBreakingTimes(newBreakTime);
    }
    else {
      alert('already added')
    }
  }

  const handleAddTimeFv = () => {
    if(breakingTimes >= 0) {

      let newBreakTime = breakingTimes * 0 + 50;
      setBreakingTimes(newBreakTime);
    }
    else {
      alert('already added')
    }
  }
  return (
    <div className='cart'>
        <Person></Person>
        <BodyIndex></BodyIndex>
        <BreakTimes 
          handleAddTime={handleAddTime} 
          handleAddTimeS={handleAddTimeS} 
          handleAddTimeT={handleAddTimeT}
          handleAddTimeF={handleAddTimeF}
          handleAddTimeFv={handleAddTimeFv}
        ></BreakTimes>
        <Details times={times} breakTimes={breakingTimes}></Details>
        <button className='btn-activity'>Activity Completed</button>
    </div>
  )
}

export default ActivityCart