import React, { useContext } from 'react';
// import ComC from './ComC';
import {bookName,author} from "./App";

const ComB = () => {

    const bName = useContext(bookName);
    const auth = useContext(author);
    return(
        <>
             return <h1> This is {bName} book by {auth} </h1>
        </>
    )
}

export default ComB;