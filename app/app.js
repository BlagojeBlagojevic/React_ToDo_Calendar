
import '@babel/polyfill';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from 'react-calendar';
import Calendarr from './components/Calendarr';
import { Navigate } from 'react-router-dom';
import Tasks from './components/tasks';
import CreateTask from './components/CreateTask';
import Main from './main';
const MOUNT_NODE = document.getElementById('app');

// GLAVNI APP
ReactDOM.render(
  <div>
  <Main />

  </div>
,MOUNT_NODE
);


