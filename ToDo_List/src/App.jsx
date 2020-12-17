import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

const App = () => {

    const [inputList,setInputList] = useState("");
    const [items,setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems,inputList]
        });
        setInputList("");
    }
    const deleteItem = (id) => {
        console.log("deleted");

        setItems((oldItems) => {
            return oldItems.filter((arrElement, index) => {
                return index !== id;
            })
        })
    }
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type="text" placeholder="Add an Item" value={inputList} onChange={itemEvent} />
                    <button onClick={listOfItems} >+</button>

                    <ol>
                        {items.map( (itemVal, index) => {
                           return <ToDoLists text={itemVal} key={index} id={index} 
                           onSelect={deleteItem} />
                        })}
                    </ol>
                </div>
            </div>

        </>
    )
}

export default App;