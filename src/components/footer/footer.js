import React from 'react';
import './footer.css';
import { linkedIn, github, facebook } from './social-icons';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="social-media-icons">
                    <img className="social-media-icon" src={linkedIn} alt="" />
                    <img className="social-media-icon" src={github} alt="" />
                    <img className="social-media-icon" src={facebook} alt="" />
                </div>
                <p>Copyright &copy; mitchellvdhut.com 2020</p>
            </div>
        </footer>
    );
};
export default Footer;
