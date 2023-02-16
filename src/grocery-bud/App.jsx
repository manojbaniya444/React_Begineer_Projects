import React, { useState } from "react";
import Alert from "./Alert";
import List from "./List";
import "./style.css";
const App = () => {
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [list, setList] = useState("");
  const [editID, setEditID] = useState();
  const [alert, setAlert] = useState({ show: false, msg: "", css: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e)
    if (!name) {
      setAlert({ show: true, msg: "Field cannot be empty!!", css: "danger" });
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...list, title: name };
          }
          return item;
        })
      );

      setName("");
      setIsEditing(false);
      setEditID(null);
      showAlert(true, "Item edited successfully", "success");
    } else {
      //setting the list
      //   setAlert({show:true,msg: "Item added successfully.",css:"success"})
      showAlert(true, "Item added successfully", "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const handleDelete = (id) => {
    showAlert(true, "Item deleted", "danger");
    setList(list.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const requiredItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(requiredItem.title);
  };

  const showAlert = (show = false, msg = "", css = "") => {
    setAlert({ show, msg, css });
  };
  return (
    <div className="container">
      <h1>Manoj Grocery bud</h1>
      <form onSubmit={handleSubmit}>
        {alert && (
          <Alert {...alert} removeAlert={showAlert} list={list} alert={alert} />
        )}
        <div className="form-control">
          <input
            type="text"
            value={name}
            placeholder="e.g rice"
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">{isEditing ? "Edit" : "Submit"}</button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="list-container">
          <List
            list={list}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      )}
    </div>
  );
};

export default App;
