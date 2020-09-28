import React from 'react';
import './menu.css';

export const Menu = ({ expand }) => {
    return (
        <div
            id="header_menu"
            style={{ display: expand ? 'flex' : 'none' }}
            className={`header_menu ${expand ? 'fadeSlide fade' : ''}`}
        >
            <ul id="menu-hoofdmenu" className="menu">
                <li id="menu-item-26" className="menu-item">
                    <a href="/">Home</a>
                </li>
                <li id="menu-item-25" className="menu-item">
                    <a href="/">Project 1</a>
                </li>
                <li id="menu-item-31" className="menu-item">
                    <a href="/">Over mij</a>
                </li>
                <li id="menu-item-32" className="menu-item">
                    <a href="/">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
