import React from 'react';
import './project.css';

const Project = () => {
    return (
        <div className="project">
            <img
                className="project-image"
                src="https://via.placeholder.com/185"
                alt=""
            />
        </div>
    );
};

const ProjectContainer = () => {
    return (
        <div className="projects-container">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    );
};
export default ProjectContainer;
