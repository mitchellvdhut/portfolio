import React from 'react';
import './project.css';

const Project = () => {
    return (
        <div className="project">
            <a href="#0">
                <div className="project-meta">
                    <h3>Title</h3>
                    <p>description</p>
                </div>
                <img
                    className="project-image"
                    src="https://via.placeholder.com/250"
                    alt=""
                />
            </a>
        </div>
    );
};

export default Project;
