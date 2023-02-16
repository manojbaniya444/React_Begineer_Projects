import React from 'react';
import Todo from './Todo';
const TodoList = ({todos,inputText,setTodos,filteredTodo})=>
{
    return(
        <>
            <div className='todoDiv'>
                <ul className='todoList'>
                    {
                        filteredTodo.map((todo)=>(
                            <Todo key={todo.id} inputText={todo.text} id={todo.id} todo={todo} setTodos={setTodos} todos={todos}/>
                        ))
                    }
                </ul>
            </div>
        </>
    )
};

export default TodoList;