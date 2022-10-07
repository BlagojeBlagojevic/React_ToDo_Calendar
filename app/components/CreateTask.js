import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function CreateTask({ setisSubmitet,setToDotime,setToDoday,setToDotext }) {
  const  [Task_field,setTask_field]=useState('');
  const [Task_date,setTask_date]=useState(new Date());  //Sta i datum
  function Onsubmit(e)
    {
       e.preventDefault();
       //setToDoday('');
       setToDotime(Task_date);
       setToDotext(Task_field);
       setisSubmitet(1);
     // const pom2=localStorage.setItem('key',JSON.stringify(id));
    }
  return (
    <form onSubmit={Onsubmit} className='create_task'>
      <input type='text' className='input_field' onChange={(e)=>{setTask_field(e.target.value)}} value={Task_field}>
      </input>
      <input type='time' className='input_field'  onChange={(e)=>{setTask_date(e.target.value)}} value={Task_date}>
      </input>
      <button type='submit' className='button'>ClickMe</button>
    </form>
  )
}
export default CreateTask
