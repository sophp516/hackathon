import React, { useState, useEffect } from 'react';
import './style.css';
import useAddTask from '../hooks/useAddTask';

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [taskId, setTaskId] = useState(1);  // Initial ID value
  const [input, setInput] = useState('');
  const [date, setDate] = useState('');
  const { addTaskf } = useAddTask();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;
    const newTask = {
      id: taskId,  // Use the current count as ID
      task: input,
      dueDate: date,
      completed: false,
    };
  
    console.log(newTask.dueDate);
    addTaskf(newTask.task, newTask.dueDate);
    setTasks([...tasks, newTask]);
    setInput('');
    setDate('');
    setTaskId(taskId + 1);  // Increment the ID for the next task
  };
  
  const toggleCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };  

  return (
    <div className="container">
      <header>
        <h1>to do</h1>
      </header>
      <div className="input-section">
        <input type="text" placeholder="What do you want to study?" value={input} onChange={e => setInput(e.target.value)} />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <button onClick={addTask}>add task</button>
      </div>
      

      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.task}</td>
              <td>{task.dueDate}</td>
              <td>{task.completed ? 'Completed' : 'Pending'}</td>
              <td>
                <button onClick={() => toggleCompletion(task.id)}>Toggle</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;