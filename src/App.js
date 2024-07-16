
import './App.css';
import LogoContainer from './components/LogoYerytech';
import TodoList from './components/TodoList'
function App() {
  return (
    <div className="Todo-App">
    <LogoContainer/>
      <div className='todo-principal-list'>
        <h1> Todos</h1>
         <TodoList/>
      </div>
    </div>
  );
}

export default App;
