import React, { useState } from 'react';
import Hamburger from './hamburger/hamburger';
import Menu from './menu/menu';
import './navbar.css';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    let sticky = (window.onscroll = () => {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            console.log('sticky');
        } else {
            console.log('not sticky');
        }
    });
    return (
        <header className="header">
            <div
                className={`container header-container ${
                    sticky ? 'sticky' : ''
                } `}
            >
                <div className="branding">
                    <a href="/">Mitchell van der Hut</a>
                </div>
                <Hamburger callback={setIsOpen} isOpen={isOpen} />
            </div>
            <Menu expand={isOpen} />
        </header>
    );
};

export default Navbar;
