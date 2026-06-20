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

            <nav className="nav-links">
                <Link to="/pokemon" className={`nav-item ${isActive('/pokemon') ? 'active' : ''}`}>
                    !?
                </Link>
                <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                    Home
                </Link>

                <Link to="/projects" className={`nav-item ${isActive('/projects') ? 'active' : ''}`}>
                    Projects
                </Link>

                <Link to="/myjourney" className={`nav-item ${isActive('/myjourney') ? 'active' : ''}`}>
                    My Journey
                </Link>

                <Link to="/aboutme" className={`nav-item ${isActive('/aboutme') ? 'active' : ''}`}>
                    About
                </Link>
            </nav>

        </header>
    );
}

export default Header;

