import React from 'react';
import './hamburger.css';

export const Hamburger = ({ callback, isOpen }) => {
    const toggle = () => {
        callback(!isOpen);
    };

    return (
        <div
            className={`${
                isOpen ? 'menuOpen' : 'menuClosed'
            } hamburger-toggler`}
            onClick={toggle}
        >
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
        </div>
    );
};

export default Hamburger;
