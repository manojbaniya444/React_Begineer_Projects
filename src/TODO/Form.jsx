import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText ,setStatus}) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const selectHandler = (e) =>
  {
    setStatus(e.target.value);
  }
  return (
    <>
      <form action="">
        <input type="text" onChange={inputTextHandler} value={inputText} placeholder='Type here'/>
        <button type="submit" onClick={submitTodoHandler}>
          Submit Button
        </button>

        <div className="selectDiv">
          <select name="todo" id="" className="selectOption" onChange={selectHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Form;
