import React from 'react';
import './footer.css';
import { linkedIn, github, facebook } from './social-icons';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="social-media-icons">
                    <a
                        href="https://www.linkedin.com/in/mitchell-van-der-hut/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="social-media-icon"
                            src={linkedIn}
                            alt=""
                        />
                    </a>
                    <a
                        href="https://github.com/mitchellvdhut"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="social-media-icon"
                            src={github}
                            alt=""
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/mitchell.vanderhut/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="social-media-icon"
                            src={facebook}
                            alt=""
                        />
                    </a>
                </div>
                <p>
                    Copyright &copy; mitchellvdhut.com{' '}
                    {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};
export default Footer;
