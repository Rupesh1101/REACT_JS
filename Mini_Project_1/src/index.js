import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
let d = new Date(2020,5,12,19);
d = d.getHours();
let greet = " ";
let cssStyle = { };
if(d>=1 && d<12){
  greet = "morning";
  cssStyle.color = "blue";
}else if(d>=12 && d<19){
  greet = "afternoon";
  cssStyle.color = "yellow";
}else{
  greet = "night";
  cssStyle.color = "black";
}


ReactDOM.render(
  <React.Fragment>
    <h1>hello sir, <span style={cssStyle}>Good {greet}</span></h1>
  </React.Fragment>
  ,document.getElementById("root")
);