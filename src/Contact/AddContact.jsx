import React, { useState } from "react";

const AddContact = (props) => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");

const add =(e) =>
{
    e.preventDefault();

    if(name ==="" || email ==="")
    {
        alert("All field must be submitted.");
    }
    props.addContactHandler(name,email);
    setName("");
    setEmail("");
};


//Here Passing props to the parent component is not completed thank you;
  return (
    <>
    <div className="ui main">
        <br /><br /><br />
        <h2>Add Contact</h2>
        <form action="" className="ui form" onSubmit={add}>
            <div className="field">
                <label htmlFor="">Name</label>
                <input type="text" name="name" placeholder="Name" onChange={ (e) =>
                {
                    setName(e.target.value);
                }}/>
            </div>
            <div className="field">
                <label htmlFor="">Name</label>
                <input type="text" name="email" placeholder="Email" onChange={(e)=>
                {
                    setEmail(e.target.value);
                }}/>
            </div>
            <button className="ui button blue" >Add</button>
        </form>
    </div>
    
    </>
  )
};

export default AddContact;
