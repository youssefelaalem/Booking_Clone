import "./navbar.css"
import React from 'react'

export const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="navContainer">
            <span className="logo">booking</span>
            <div className="navItem">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}
