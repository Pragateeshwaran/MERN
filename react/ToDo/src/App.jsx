import React, { useState } from 'react';
import './App.css'; // Optional for styling

function App() {
  const [task, setTask] = useState(''); // Input field for new task
  const [tasks, setTasks] = useState([]); // Array to store the tasks

  // Handle adding a new task
  const addTask = () => {
    if (task.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, { id: Date.now(), text: task, completed: false }]);
      setTask(''); // Reset the input field after adding the task
    }
  };

  // Handle deleting a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Handle marking a task as completed
  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>

      {/* Input to add a new task */}
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Task List */}
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(task.id)}
            />
            <span>{task.text}</span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
