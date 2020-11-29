import React from 'react';
import ReactDOM from 'react-dom';
import {add,sub,mul,div} from './App';

ReactDOM.render(
  <>
    <ul>
      <li>Sum is :- {add(10,10)} </li>
      <li>Substracion is :- {sub(10,10)} </li>
      <li>Multiplication is :- {mul(10,10)} </li>
      <li>Diision is :- {div(17,3)} </li>
    </ul>
  </>,
  document.getElementById('root')
);