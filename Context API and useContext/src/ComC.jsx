import React from 'react';
import {bookName,author} from "./App";

const ComC = () => {

    return(
        <>
            <bookName.Consumer>
            {(props) => {
                return(
                    <author.Consumer>
                            {(props1) => {
                                return <h1> This is {props} book by {props1} </h1>
                            }}
                    </author.Consumer>
                );
            }}
            </bookName.Consumer>
        </> 
        
    )
}

export default ComC;