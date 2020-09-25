import React from 'react';
import './hamburger.css';
import { connect, useDispatch } from 'react-redux';

function mapStateToProps(state) {
    return {
        menuStatus: state.isOpen,
    };
}

export const Hamburger = ({ callback, isOpen }) => {
    const dispatch = useDispatch();
    const toggle = () => {
        callback(!isOpen);
        !isOpen
            ? dispatch({ type: 'OPEN_MENU' })
            : dispatch({ type: 'CLOSE_MENU' });
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

export default connect(mapStateToProps)(Hamburger);
