import './App.css';
import { useState } from 'react';
import Input from './component/Input';
import TodoList from './component/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <header>My-Todo-List</header>
      <Input todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} listIsDone={false} />
      <TodoList todos={todos} setTodos={setTodos} listIsDone={true} />
    </div>
  );
}

export default App;
