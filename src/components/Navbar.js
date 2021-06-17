import React from 'react';
import {FaRegLightbulb} from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
    return (
        <header className="header">
            <FaRegLightbulb className="note"/>
            <h1>Keeper</h1>
        </header>
    )
}

export default Navbar
