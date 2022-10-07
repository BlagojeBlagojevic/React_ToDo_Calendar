import React from 'react'
import CreateTask from './CreateTask'
import Calendarr from './Calendarr'
import { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const Header = ({setisForm,setisDisplay}) => {

  return (
    <div className='' style={{ width: "300px", }}>
    <header className=' header d-flex justify-content-between'>
     <img onClick={()=>{setisForm(false);setisDisplay(true);}} className='image'  src='data:image/png;base64,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'/>

      <h1 className='calendar_sign'>Calendar</h1>
    <img onClick={()=>{setisForm(true);setisDisplay(false);}} className='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbMogdPslbZaa9Th1hRvCCtzveStfagjWjw&usqp=CAU'/>
      </header>
    </div>

  )
}
export default Header
