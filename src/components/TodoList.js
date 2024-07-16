import React,{useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import '../styles/TodoList.css';
function TodoList() {

    const [todos, setTodos] = useState([]);
  const addTodo = todo => {
    if (todo.text.trim()) {
      todo.text = todo.text.trim();
      const todoNow = [todo, ...todos];
      setTodos(todoNow);
        todos.pop()
    }
    
  };
  
  const deleteTodo = id => {
    const removeTodo = todos.filter(todo => todo.id !== id);
    setTodos(removeTodo);
  }


  const completedTodo = id => { 
  
    const updateTodos = todos.map( todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
        
      }
      return todo;
    });
    setTodos(updateTodos);

  }


    return (
        <>
        <TodoForm onSubmit={ addTodo} />
        <div className='todo-list-container'>
                {
                    
                    todos.map((todo) =>
                      <Todo
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        isCompleted={todo.isCompleted}
                        completedTodo={completedTodo}
                        todoDelete={deleteTodo}
                        />
                    )
           }
       </div>
    </>


   )

}

export default TodoList;    