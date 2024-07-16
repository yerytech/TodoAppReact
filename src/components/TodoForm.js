import React,{useState} from 'react';
import '../styles/TodoForm.css'
import {v4 as uuidv4} from 'uuid'

function TodoForm(props) {

const [input, setInput] = useState('')

  const sendChange= (e) => {
    setInput(e.target.value)
    
  } 



  const sendTodo = (e) => { 
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      text: input,
      isCompleted: false
    }
    props.onSubmit(newTodo)
  }


  return (
    <form className='todo-form'
     onSubmit={sendTodo}
    >
      <input
        className='todo-input'
        type='text'
        placeholder='Add a todo'
        name='text'
        onChange={sendChange}
      />
      <button
      
        className='todo-button'>
        Add todo
      </button>


    </form>


  )
}

export default TodoForm;  