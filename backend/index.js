const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let tasks = [];
let id = 1;

// Create a new task
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and Description are required.' });
  }
  const task = { id: id++, title, description };
  tasks.push(task);
  res.status(201).json(task);
});

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Update a task
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const task = tasks.find(t => t.id == id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  task.title = title || task.title;
  task.description = description || task.description;

  res.json(task);
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(t => t.id != id);
  res.json({ message: 'Task deleted' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
