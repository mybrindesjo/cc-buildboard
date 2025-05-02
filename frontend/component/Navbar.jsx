import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="/">Home</a>
                </li>
                <li className="navbar-item">
                    <a href="/todos">Todo</a>
                </li>
            </ul>

        </nav>
    </div>
  )
}

export default Navbar