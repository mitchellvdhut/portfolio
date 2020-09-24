import React, { useState } from 'react';
import Hamburger from './hamburger/hamburger';
import Menu from './menu/menu';
import './navbar.css';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="header">
            <Menu expand={isOpen} />
            <div className="container header-container">
                <div className="branding">
                    <a href="/">Mitchell van der Hut</a>
                </div>
                <Hamburger callback={setIsOpen} isOpen={isOpen} />
            </div>
        </header>
    );
};

export default Navbar;