import React from 'react'
import logo from "../imgs/logo-nobg.png";
import HeaderContent from "./HeaderContent"

const Header = () => {
    return (
        <header className="header">
            <nav className="nav-bar">
                <div className='container'>
                <div className="logo-container">
                    <img src={logo} alt="Website Logo" className="logo" />
                    <h1>Royal Coder <span className='golden'>Lab</span></h1>
                </div>
                <ul>

                    <a href="#home" className="nav-item">Home</a>
                    <a href="#about" className="nav-item">About</a>
                    <a href="#services" className="nav-item">Services</a>
                    <a href="#contact" className="nav-item">Contact</a>
                </ul>
                </div>
            </nav>
            <HeaderContent />
        </header>
    )
}

export default Header
