import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar container">
            <input type="checkbox" id="toggler" />
            <label htmlFor="toggler" className="hamburger"><i className="ri-menu-line"></i></label>
            <div className="menu">
                <ul className="list">
                    <li><NavLink to="/"> Home</NavLink></li>
                    <li><NavLink to="/Project"> Project</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                    <li><NavLink to="/About"> About</NavLink></li>
                </ul>
            </div>
        </nav>

    )
}

export default Header