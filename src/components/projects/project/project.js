import React from 'react';
import './project.css';

const Project = ({ title, body, image }) => {
    return (
        <div className="project">
            <a href="#0">
                <div className="project-meta">
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
                <img className="project-image" src={image} alt={title} />
            </a>
        </div>
    );
};

export default Project;
