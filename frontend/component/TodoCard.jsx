import React from 'react';

const TodoCard = ({ title, description, deadline, status, onStatusChange }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'pågående':
        return '#75B07D'; // green
      case 'pausad':
        return '#FFDE87'; // yellow
      case 'avslutad':
        return '#FF7C85'; // red
      case 'klar':
        return '#7175A1'; // gray
      default:
        return '#ffffff'; // default white
    }
  };

  return (
    <div className="todo-card" style={{ backgroundColor: getStatusColor() }}>
      <div className="card-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Deadline: {deadline}</p>
      </div>
      <div className="status-buttons">
        <button onClick={() => onStatusChange('pågående')}>Pågående</button>
        <button onClick={() => onStatusChange('pausad')}>Pausad</button>
        <button onClick={() => onStatusChange('avslutad')}>Avslutad</button>
        <button onClick={() => onStatusChange('klar')}>Klar</button>
      </div>
    </div>
  );
};

export default TodoCard;