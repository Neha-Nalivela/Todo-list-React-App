import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

export const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <Header/>
      <TodoForm onAddTask={(task) => setTasks([...tasks, task])} />
      <TodoList tasks={tasks} setTasks={setTasks} />
      <Footer/>
    </div>
  );
}

export default App;
