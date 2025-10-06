import React from 'react'
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="/">
                <img className='logo' src="./src/assets/clock.png"/>
            </a>

            <div className='navbar_menu_left'>
                <img className='login' src="./src/assets/login.png"/>
            </div>            
        </nav>
    )
}

export default Navbar
