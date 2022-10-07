import React from 'react';
import Header from './components/header';
import Calendar from 'react-calendar';
import Calendarr from './components/Calendarr';
import { Navigate } from 'react-router-dom';
import Tasks from './components/tasks';
import CreateTask from './components/CreateTask';
import { useState } from 'react';
import { useEffect } from 'react';
import { string } from 'prop-types';
function Main() {
  const [ToDotime, setToDotime] = useState();
  const [ToDoday, setToDoday] = useState();    //Podatci
  const [ToDotext, setToDotext] = useState();

  const [isSubmitet, setisSubmitet] = useState(0);
  const [date,setdate] = useState('');
  const [isForm, setisForm] = useState(true);     //Kontrola
  const [isDisplay, setisDisplay] = useState(false);
  useEffect(() => {
    setisDisplay(true);
    setisForm(false);
    setisSubmitet(0);
  },[isSubmitet])
  return (
<>
  <div style={{ width:'300px',height:'384px' }}>
      <Header setisForm={setisForm} setisDisplay={setisDisplay} setisSubmitet={setisSubmitet} />
     <Calendarr setdate1={setToDoday} setisDisplay={setisDisplay}/>
    </div>
    <div style={{display: isForm ? 'block' : 'none'}}>
      <CreateTask setisSubmitet={setisSubmitet} setToDotime={setToDotime} setToDoday={setToDoday} setToDotext={setToDotext}/>
    </div>
    <div style={{display: isDisplay ? 'block' : 'none'}}>
    <Tasks setisDisplay={setisDisplay} ToDotext={ToDotext} ToDotime={ToDotime} ToDoday={ToDoday} isSubmitet={isSubmitet}/>
    <div/>
  </div>
</>
  );
}

export default Main
