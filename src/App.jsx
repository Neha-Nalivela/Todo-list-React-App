import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Header from './components/Header';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <Header/>
      <TodoForm onAddTask={(task) => setTasks([...tasks, task])} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
