import React from 'react';
import './menu.css';
import { Link, useLocation } from 'react-router-dom';
import pages from '../../../pages.json';

export const Menu = ({ expand }) => {
    const location = useLocation().pathname;
    const mainMenu = pages['main-menu'];
    return (
        <div
            id="header_menu"
            style={{ display: expand ? 'flex' : 'none' }}
            className={`header_menu ${expand ? 'fadeSlide fade' : ''}`}
        >
            <ul id="menu-hoofdmenu" className="menu">
                {mainMenu.map((page, index) => (
                    <li
                        className={`menu-item ${
                            location === page.path ? 'currentPage' : ''
                        }`}
                    >
                        <Link key={index} to={page.path}>
                            {page.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
