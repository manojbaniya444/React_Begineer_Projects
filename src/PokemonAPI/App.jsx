import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () =>
{
    const [num, setNum] = useState();
    const [name, setName] = useState("{Pokemon Name}");
    const [move, setMove]  = useState("{Number of moves}");
    useEffect(()=>
    {
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);
            setMove(res.data.moves.length);
        }
        getData();
    });

    const selectHandler= (e) =>
    {
        setNum(e.target.value);
    }

    // const submitHandler = (e) =>
    // {
    //     e.preventDefault();
    // }
    // const inputHandler = (e) =>
    // {
    //     setTemp(e.target.value)
    // }
    return(
        <>
    <h1 style={{textAlign:'center'}}>Pokemon API</h1>
    <h2>You Choose Value {num}</h2>
    <h2>Hi I am <span style={{color:'blue'}}>{name}</span> and</h2>
    <h2>I have <span style={{color:'blue'}}>{move}</span> Moves.</h2>
    <select name="pokemon" id="" onChange={selectHandler}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
{/* <form action="">
<input type="text" placeholder='Enter the Pokemon Number You want to know' onChange={inputHandler}/>
<button onSubmit={submitHandler}>Get</button>
</form>
     */}
        </>
    )
};

export default App;