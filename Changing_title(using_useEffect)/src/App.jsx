import React, { useEffect, useState } from 'react';

const App = () => {

    const [num,setNum] = useState(0);

    useEffect(() => {
        // alert("I'm clicked")
        document.title = `you clicked me ${num} times.`
    })
    return(
        <>
            <button onClick={()=>{
                setNum(num+1);
            }}>
                Click Me {num}
            </button>
        </>
    )
}

export default App;