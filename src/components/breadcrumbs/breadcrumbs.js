import React from 'react';
import './breadcrumbs.css';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    let location = useLocation().pathname;
    let locationArray = location.split('/');
    if (locationArray[2]) {
        location = locationArray[2];
    }

    return (
        <div className="breadcrumbs">
            <Link to="/">Home</Link>
            &nbsp;/&nbsp;
            {locationArray === '/' ? (
                ''
            ) : (
                <span>
                    {locationArray[2] ? locationArray[2] : locationArray[1]}
                </span>
            )}
        </div>
    );
};

export default Breadcrumbs;
