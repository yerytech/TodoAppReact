import React from 'react';
import '../styles/Todos.css'
import { AiOutlineCloseCircle } from "react-icons/ai";
function Todo({id,text,isCompleted,completedTodo,todoDelete}) {
    return (
        <div className={isCompleted ? 'todo-container-completed' : 'todo-container'}>
            <div className='todo-text'
                onClick={() => completedTodo(id)}
            >
                {text}
            </div>
            <div className='todo-container-icon'
                onClick={() => todoDelete(id)} >
                <AiOutlineCloseCircle
                    className='todo-icon' />

            </div>
           
        </div>

    );




}

export default Todo;