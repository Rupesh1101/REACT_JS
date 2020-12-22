import axios from 'axios';
import React, { useEffect, useState } from 'react';


const ComA = () => {

    const [id,setId] = useState();
    const [name,setName] = useState();
    const [moves,setMoves] = useState();

    useEffect(() => {
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData();
    })
    return(
        <>
            <h1>Id is : <span style={{color:'red'}}>{id}</span></h1>
            <h1>Pokemon name is : <span style={{color:'red'}}>{name}</span></h1>
            <h1>It has <span style={{color:'red'}}>{moves}</span> moves.</h1>

            <select value={id} onChange={(event)=>{
                setId(event.target.value);
            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    )
}

export default ComA;