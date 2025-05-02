import React, { useState, useEffect } from 'react';
import TodoCard from './TodoCard';
import AddTodo from './AddTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  const saveTodosToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
    alert('Todos saved to localStorage!');
  };

  const addTodo = (title, description, deadline) => {
    const newTodo = { title, description, deadline, status: 'pausad' };
    setTodos((prevTodos) => sortTodos([...prevTodos, newTodo]));
  };

  const updateTodoStatus = (index, newStatus) => {
    const updatedTodos = [...todos];
    updatedTodos[index].status = newStatus;
    setTodos(sortTodos(updatedTodos));
  };

  const sortTodos = (todos) => {
    const statusOrder = { 'pågående': 1, 'pausad': 2, 'avslutad': 3, 'klar': 4 };
    return todos.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
  };

  return (
    <div>
      <AddTodo onAdd={addTodo} />
      <button onClick={saveTodosToLocalStorage}>Save Todos</button>
      {todos.map((todo, index) => (
        <TodoCard
          key={index}
          title={todo.title}
          description={todo.description}
          deadline={todo.deadline}
          status={todo.status}
          onStatusChange={(newStatus) => updateTodoStatus(index, newStatus)}
        />
      ))}
    </div>
  );
};

export default TodoList;