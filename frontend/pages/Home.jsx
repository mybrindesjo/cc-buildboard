import React from 'react'
import Profile from '../component/Profile'
import TodoList from '../component/TodoList'

const Home = () => {
  return (
    <div className="home-page">
        <Profile />
        <div className="divider"></div>
        <TodoList />
        
   </div>
  )
}

export default Home