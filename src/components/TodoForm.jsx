import React, { useState } from 'react';
import axios from 'axios';
import "./TodoForm.css";
import { AppContext } from '../App';
import { API_URL } from '../App'; // or a config file if separated

export default function TodoForm({ onAddTask }) {
  const [taskValue, setTaskValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskValue.trim()) return;

    const task = {
      taskId: Date.now(),
      taskValue
    };

    try {
      //const res = await axios.post('http://localhost:8080/tasks/new', task);
      const res = await axios.post(`${API_URL}/tasks/new`, task);
      onAddTask(res.data);
      setTaskValue('');
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="data">
        <input
          id="taskInput"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
          placeholder="Enter task"
          autoComplete="off"
        /> <br />
        <button type="submit" disabled={!taskValue.trim()}>Add</button>
      </div>
    </form>
  );
}
