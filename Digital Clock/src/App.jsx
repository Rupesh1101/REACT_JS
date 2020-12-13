import React, { useState } from 'react';

const App = () => {

    let time = new Date().toLocaleTimeString();

    const [curTime,setTime] = useState(time);

    setInterval( () => {
        time = new Date().toLocaleTimeString();
        setTime(time);
    },1000);

    return(
        <>
            <h1 className="main">{curTime}</h1>
        </>
    );
}

export default App;