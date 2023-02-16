import React from "react";

const Todo = ({ inputText, todo, setTodos, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

const completeHandler = () =>
{
    setTodos(todos.map((item) =>
    {
        if(item.id===todo.id)
        {
            return{
                ...item, completed: !item.completed
            }
        }
        return item;
    }))
}
  return (
    <div className="todo">
      <li className={` completed ${todo.completed?"completed_class":""}`}>{inputText}</li>
      <button onClick={completeHandler} className='completeButton'>CompleteButton</button>
      <button onClick={deleteHandler} className='deleteButton'>Delete</button>
    </div>
  );
};

export default Todo;
