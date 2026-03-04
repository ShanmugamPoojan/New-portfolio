import { Link } from 'react-router-dom';
import '../styling/Header.css'
import { useState } from 'react';

function Header() {
    const [menuState, setMenuState] = useState(false);

    const showMenu = () => {
        setMenuState(prev => !prev);
        // document.querySelector('.menu-small').style.display = menuState ? 'block' : 'none';
        document.querySelector('.menu-large').style.display = menuState ? 'none' : 'block';
        // if (header) {
        //     if (!menuState) {
        //         header.classList.add('dark');
        //     } else {
        //         header.classList.remove('dark');
        //     }
        // }
    }
    return (
        <>
            <div className='logo'>
                <spam>SP</spam>
            </div>
            <div className="nav-bar">
                <div className='menu-small' onClick={showMenu}>
                    <div className="menu-button">MENU</div>
                </div>
                <div className='menu-large' onClick={showMenu}>

                    <Link to='/'>
                        <div className="menu-button">Home</div>
                    </Link>

                    <Link to='/projects'>
                        <div className="menu-button">Projects</div>
                    </Link>
                    <Link to='/myjourney'>
                        <div className="menu-button">My Journey</div>
                    </Link>
                    <Link to='/aboutme'>
                        <div className="menu-button">About Me</div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header;

