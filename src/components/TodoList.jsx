import React, { useEffect } from 'react';
import axios from 'axios';
import './TodoList.css';
export default function TodoList({ tasks, setTasks }) {
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get('http://localhost:8080/tasks/');
        setTasks(res.data);
      } catch (err) {
        console.error('Error fetching tasks:', err);
      }
    };

    fetchTasks();
  }, [setTasks]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  return (
    <ul>
      <h1>Tasks to be done</h1>
      {tasks.map((task) => (
        <li className="data1" key={task._id}>
          {task.taskValue}
          <button onClick={() => handleDelete(task._id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
