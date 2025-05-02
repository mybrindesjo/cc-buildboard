import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import TodoList from '../component/TodoList'
import React from 'react'
import Navbar from '../component/Navbar'
import Home from '../pages/Home'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoList />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
