import React from 'react';

export const Menu = ({ expand }) => {
    return (
        <div
            id="header_menu"
            style={{ display: expand ? 'flex' : 'none' }}
            className={`header_menu ${expand ? 'fadeSlide fade' : ''}`}
        >
            <ul id="menu-hoofdmenu" className="menu">
                <li
                    id="menu-item-26"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-26"
                >
                    <a href="http://mitchellvdhut.com">Home</a>
                </li>
                <li
                    id="menu-item-25"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-25"
                >
                    <a href="http://mitchellvdhut.com/projects/this-is-a-new-project/">
                        Project 1
                    </a>
                </li>
                <li
                    id="menu-item-31"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-31"
                >
                    <a href="#">Over mij</a>
                </li>
                <li
                    id="menu-item-32"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-32"
                >
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
