import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleAddTodo = () => {
    if (title && description && deadline) {
      onAdd(title, description, deadline);
      setTitle('');
      setDescription('');
      setDeadline('');
      setIsAdding(false); // Hide the input fields after adding
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="add-todo">
      {isAdding ? (
        <div className="add-todo-fields">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add Todo</button>
          <button onClick={() => setIsAdding(false)}>Cancel</button>
        </div>
      ) : (
        <button className="add-todo-btn" onClick={() => setIsAdding(true)}>
          Skapa ny <span className="plus-icon">+</span>
        </button>
      )}
    </div>
  );
};

export default AddTodo;