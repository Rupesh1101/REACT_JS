import React, { useState } from 'react';

const App = () => {

    const [name,setName] = useState();
    const [fullName,setFullName] = useState();
    const input = (event) => {
        setName(event.target.value)
    }
    const onSubmit = () =>{
        setFullName(name);
    }

    return(
        <>
        <div className="container">
            <h2>Hello {fullName}</h2>
            <input type="text" placeholder="Enter Your Name" onChange={input} value={name}/>
            <br/>
            <button onClick={onSubmit}>Submit Name</button>
        </div>
        </>
    );
}

export default App;