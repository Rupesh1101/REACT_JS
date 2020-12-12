import React, { useState } from 'react';

const App = () => {
const state = useState();
// console.log(state)

const[count,setCount] = useState(0);

const IncNum = () =>{
    setCount(count+1);
    // console.log('clicked'+count ++);
}


    return(
        <>
        <div className='main'>
            <h1 className='cnt'>{count}</h1>
            <button onClick={IncNum} className='btn'>click me</button>
        </div>
        </>
    )
}

export default App;