import React from 'react';
import Project from './project/project';
import data from '../../data.json';

const projects = data.projects;
const Projects = () => {
    return (
        <div className="projects-container">
            {projects.map(project => (
                <Project {...project} />
            ))}
        </div>
    );
};
export default Projects;
