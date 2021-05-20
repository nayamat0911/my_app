import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const my_app = "our eact app";
const title ="This is my React app";
const my_react = "Todo app";
const date = new Date();
const fullDate = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

ReactDOM.render(
  <React.StrictMode>
    <App />
    <h1>{title}</h1>
    <h2>{my_react}</h2>
    <h3>{my_app}</h3>
    <h4>{fullDate + "/" + monthName + "/"+currentYear}</h4>
  </React.StrictMode>,
  document.getElementById('root')
);
