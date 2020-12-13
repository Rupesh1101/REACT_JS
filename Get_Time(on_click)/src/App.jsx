import React, { useState } from 'react';

const App = () => {
const state = useState();

let curTime = new Date().toLocaleTimeString(); 
const[time,setTime] = useState(curTime);

const IncNum = () =>{
    curTime = new Date().toLocaleTimeString();
    setTime(curTime);
    // console.log('clicked'+count ++);
}


    return(
        <>
        <div className='main'>
            <h2 className='cnt'>{time}</h2>
            <button onClick={IncNum} className='btn'>Get Time</button>
        </div>
        </>
    )
}

export default App;