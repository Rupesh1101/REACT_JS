import React, { useState } from 'react';

const App = () => {

    const [name,setName] = useState();
    const [fullName,setFullName] = useState();
    const [lastName,setLastName] = useState();
    const [cName,setcName] = useState();
    const input = (event) => {
        setName(event.target.value)
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        setFullName(name);
        setcName(lastName);
    }
    const inputLast = (event) => {
        setLastName(event.target.value);
    }
    // lastName

    return(
        <>
        <div className="container">
            <form onSubmit={onSubmit}>
                <h2>Hello {fullName} {cName}</h2>
                <input type="text" placeholder="Enter Your First Name" onChange={input} value={name}/>
                <br/>
                <input type="text" placeholder="Enter Your Last Name" onChange={inputLast} value={lastName}/>
                <br/>
                <button type="submit">Submit Name</button>
            </form>
        </div>
        </>
    );
}

export default App;