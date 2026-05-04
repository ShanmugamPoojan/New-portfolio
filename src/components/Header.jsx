import { Link, useLocation } from 'react-router-dom';
import '../styling/header.css'
import '../styling/card.css'
import logo from '../assets/logo.png'
import { useState } from 'react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const handleMenuClick = (e) => {
        if (e.target.tagName === 'A' || e.target.closest('a')) {
            setMenuOpen(false);
        }
    }

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className='logo'>
                {/* <span><img src={logo} alt="Logo" /></span> */}
            </div>
            <div className="nav-bar">
                <div className='menu-small' onClick={() => setMenuOpen(prev => !prev)}>
                    <div className="menu-button">MENU</div>
                </div>
                {menuOpen && (
                    <div className='menu-large' onClick={handleMenuClick}>
                        <Link to='/' className={isActive('/') ? 'active' : ''}>
                            <div className="menu-button">Home</div>
                        </Link>
                        <Link to='/projects' className={isActive('/projects') ? 'active' : ''}>
                            <div className="menu-button">Projects</div>
                        </Link>
                        <Link to='/myjourney' className={isActive('/myjourney') ? 'active' : ''}>
                            <div className="menu-button">My Journey</div>
                        </Link>
                        <Link to='/aboutme' className={isActive('/aboutme') ? 'active' : ''}>
                            <div className="menu-button">About Me</div>
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default Header;

