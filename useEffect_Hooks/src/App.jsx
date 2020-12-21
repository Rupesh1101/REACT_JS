import React, { useEffect, useState } from 'react';

const App = () => {

    const [num,setNum] = useState(0)
    const [num1,setNum1] = useState(0)

    useEffect(() => {
        alert("I'm clicked")
    },[num])
    return(
        <>
            <button onClick={()=>{
                setNum(num+1);
            }}>
                Click Me {num}
            </button>
            <br/>
            <button onClick={()=>{
                setNum1(num1+1);
            }}>
                Click Me {num1}
            </button>
        </>
    )
}

export default App;