import { arrayOf } from 'prop-types';
import React, { isValidElement, useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import './style.css';
let a_ToDotext=new Array();
let a_ToDotime=new Array();
let a_ToDoday=new Array();
let control=false;   //Sluzi da mi ne stavlja 2 puta u niz
let time=new Array()
let text=new Array();
let day;
function Tasks( { setisDisplay, ToDotext, ToDotime, ToDoday,isSubmitet} ) {
  const [Delete, setDelete] = useState(0);
  useEffect(()=>{

    if(control){
      a_ToDoday.push(ToDoday);
      a_ToDotext.push(ToDotext);
      a_ToDotime.push(ToDotime);


    }
    setisDisplay(true);
    control=!control;
  },[isSubmitet]);
useEffect(() => {
    day=ToDoday;
    time=[];
    text=[];
  const pom=a_ToDoday.filter((element,index) => {

          if(element===ToDoday)
          {
            time.push(a_ToDotime[index])
            text.push(a_ToDotext[index])
            }
          });
  //        console.log(day,text,time)

}, [ToDoday,isSubmitet]);

  return(

    <div  className='tabela'>
     <h1>{day}</h1>
      {
          time.map((time1,index)=>{
            return (<div><div>{time1} {text[index]}</div>

            </div>

            );
          })
      }
    </div>
   );
}
export default Tasks


// <img onClick={filtering(index)} className='image2' src='https://cdn.xxl.thumbs.canstockphoto.com/cancel-flat-icon-christmas-button-x-sign-clipart_csp23497411.jpg'></img>
