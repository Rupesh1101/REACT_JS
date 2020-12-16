import React, { useState } from 'react';

const App = () => {

    const [fullName,setFullName] = useState({
        fname : "",
        lname : "",
        email : "",
        number : "",

    });

    const input = (event) => {
        
        const {name,value} = event.target;
        setFullName((preValue) => {
           return{
               ...preValue,
               [name] : value,
           }
        })            

    }
    const onSubmit = (event) =>{
        event.preventDefault();
        alert('form submitted')
    }

    return(
        <>
        <div className="container">
            <form onSubmit={onSubmit}>
                <h2>Hello {fullName.fname} {fullName.lname}</h2>
                <p>{fullName.email}</p>
                <p>{fullName.number}</p>
                <input type="text" placeholder="Enter Your First Name" name="fname" 
                onChange={input} value={fullName.fname}/>
                <br/>
                <input type="text" placeholder="Enter Your Last Name" name="lname" 
                onChange={input} value={fullName.lname}/>
                <br/>
                <input type="email" placeholder="Enter Your Email" name="email" 
                onChange={input} value={fullName.email}/>
                <br/>
                <input type="number" placeholder="Enter Your Mobile Number" name="number" 
                onChange={input} value={fullName.number}/>
                <br/>
                <button type="submit">Submit Name</button>
            </form>
        </div>
        </>
    );
}

export default App;