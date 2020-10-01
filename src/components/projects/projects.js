import React from 'react';
import ProjectPreview from './project/projectpreview';
import data from '../../data.json';

const projects = data.projects;
const Projects = () => {
    return (
        <div className="projects-container">
            {projects.map((project, index) => (
                <ProjectPreview key={index} {...project} />
            ))}
        </div>
    );
};
export default Projects;
