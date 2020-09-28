import React, { useState } from 'react';
import Hamburger from './hamburger/hamburger';
import Menu from './menu/menu';
import './navbar.css';
import { useSelector } from 'react-redux';

export const Navbar = () => {
    const isOpen = useSelector(state => state.isMenuOpen);
    const [isSticky, setIsSticky] = useState(false);
    window.onscroll = () =>
        setIsSticky(
            document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50,
        );
    return (
        <header className="header">
            <div
                className={`container header-container ${
                    isSticky ? 'sticky' : ''
                } `}
            >
                <div className="branding">
                    <a href="/">Mitchell van der Hut</a>
                </div>
                <Hamburger isOpen={isOpen} />
            </div>
            <Menu expand={isOpen} />
        </header>
    );
};

export default Navbar;
