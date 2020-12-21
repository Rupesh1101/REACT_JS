import React, { createContext } from 'react';
import ComA from './ComA';

const bookName = createContext();
const author = createContext();
const App = () => {
    return(
        <>
            <bookName.Provider value="Maths">
                <author.Provider value="B.S. Grewal">
                    <ComA/> 
                </author.Provider>
             </bookName.Provider>
        </>
    )

}

export default App;
export {bookName,author};