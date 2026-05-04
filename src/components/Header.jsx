import { Link, useLocation } from 'react-router-dom';
import '../styling/header.css'
import '../styling/card.css'
import logo from '../assets/logo.png'
import { useState } from 'react';

function Header() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <header className="header">

            {/* DESKTOP NAV */}
            <nav className="nav-links">
                <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
                <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>Projects</Link>
                <Link to="/myjourney" className={isActive('/myjourney') ? 'active' : ''}>My Journey</Link>
                <Link to="/aboutme" className={isActive('/aboutme') ? 'active' : ''}>About</Link>
            </nav>

        </header>
    );
}

export default Header;

