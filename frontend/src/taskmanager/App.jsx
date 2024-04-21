/*Task manager */

// eslint-disable-next-line no-unused-vars
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
    <div className='task-root'>
    <div className="container">
      <header>
        <h1>task list</h1>
      </header>
      <div className="input-section">
        <input type="text" placeholder="What's your next task?" value={input} onChange={e => setInput(e.target.value)} />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <button onClick={addTask}>add task</button>
      </div>
      

      <table>
        <thead>
          <tr>
            <th>task</th>
            <th>due date</th>
            <th>status</th>
            <th id='action'>actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.task}</td>
              <td>{task.dueDate}</td>
              <td>{task.completed ? 'Completed' : 'Pending'}</td>
              <td>
                <div className='action-container'>
                  <div className='complete-btn'>
                    <button onClick={() => toggleCompletion(task.id)}><img src='/assets/check.png' id='btn1'/></button>
                  </div>
                  <div className='delete-btn'>
                   <button onClick={() => deleteTask(task.id)}><img src='/assets/x.png' id='btn2'/></button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default App;