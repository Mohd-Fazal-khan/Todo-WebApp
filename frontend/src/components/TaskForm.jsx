import React, { useEffect, useState } from 'react';

const TaskForm = ({ onSubmit, editingTask, setEditingTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Task Name is required';
    if (!description.trim()) newErrors.description = 'Description is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const taskData = { title, description };
    if (editingTask) taskData.id = editingTask.id;

    onSubmit(taskData);
    setTitle('');
    setDescription('');
    setEditingTask(null);
    setErrors({});
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setErrors(prev => ({ ...prev, title: '' }));
        }}
      />
      {errors.title && (
        <p style={{ color: 'red', fontSize: '14px' }}>{errors.title}</p>
      )}

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          setErrors(prev => ({ ...prev, description: '' }));
        }}
      />
      {errors.description && (
        <p style={{ color: 'red', fontSize: '14px' }}>{errors.description}</p>
      )}

      <button type="submit">{editingTask ? 'Update' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
