import React from 'react';
import './hamburger.css';
import { useDispatch } from 'react-redux';

export const Hamburger = ({ isOpen }) => {
    const dispatch = useDispatch();
    const toggle = event => {
        event.preventDefault();
        dispatch({ type: !isOpen ? 'OPEN_MENU' : 'CLOSE_MENU' });
    };

    return (
        <a
            className={`${
                isOpen ? 'menuOpen' : 'menuClosed'
            } hamburger-toggler`}
            aria-label={`${isOpen ? 'Close menu' : 'Open Menu'}`}
            href="#0"
            onClick={toggle}
        >
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
        </a>
    );
};

export default Hamburger;
