import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const API_URL = 'http://localhost:5000/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTasks(data);
  };

  const addTask = async (task) => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter(t => t.id !== id));
  };

  const updateTask = async (updatedTask) => {
    const res = await fetch(`${API_URL}/${updatedTask.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask),
    });
    const data = await res.json();
    setTasks(tasks.map(t => (t.id === data.id ? data : t)));
    setEditingTask(null);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

return (
  <div className="container">
    <h1>Add New Task</h1>
    <TaskForm
      onSubmit={editingTask ? updateTask : addTask}
      editingTask={editingTask}
      setEditingTask={setEditingTask}
    />
    <h2>Task List</h2>
    <TaskList tasks={tasks} onEdit={setEditingTask} onDelete={deleteTask} />
  </div>
);

}

export default App;
