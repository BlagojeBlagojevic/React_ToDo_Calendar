import React, { useEffect } from 'react'
import Callendar from './react-calendar'
import './style.css'
import Tasks from './tasks';
import { useState } from 'react';
import CreateTask from './CreateTask';
import './react-calendar/dist/Calendar.css';
import { string } from 'prop-types';
import { useNavigate } from 'react-router-dom';
function Calendarr({ setdate1,setisDisplay }) {
  const [date, setDate] = useState('');
  useEffect(() => {
    let pom=date;
    pom=pom.toString();
    pom=pom.slice(0,16);
    //console.log(pom);
    setdate1(pom);
    setisDisplay(false);

      },[date]);
  return (
    <>
    <div className='calendar'>
      <Callendar onChange={setDate} value={date}  defaultView='month'/>
    </div>
    </>
  )
}
export default Calendarr
