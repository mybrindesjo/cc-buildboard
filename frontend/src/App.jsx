import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WelcomePage from '../component/WelcomePage';
import TodoList from '../component/TodoList';
import Navbar from '../component/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/app" element={<TodoList />} />
      </Routes>
    </Router>
  );
};

export default App;
