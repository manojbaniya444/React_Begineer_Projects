import React, { useState } from "react";
// import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const App = () => {

    // const contacts = [
    //     {
    //         id: "1",
    //         name: "Manoj",
    //         email: "manojbaniya474@gmail.com",
    //     },
    //     {
    //         id: "2",
    //         name: "Saurav",
    //         email: "Sauravniroula17@gmail.com",
    //     }

    // ]

    const [contacts, setContacts] = useState([]);
    const addContactHandler = (contact) =>
    {
        console.log(contact);
        setContacts([...contacts, contact]);
    }
  return (
    <>
      <div className="ui container">
        <Header />
        <AddContact addContactHandler = {addContactHandler}/>  
        <ContactList contacts={contacts}/>  
      </div>
    </>
  );
};

export default App;
