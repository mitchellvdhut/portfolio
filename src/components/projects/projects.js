import React, { useEffect, useState } from 'react';
import ProjectPreview from './project/projectpreview';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            // url: 'http://www.monneylane.com/projects',
            url: 'https://mitchellvdhut-api.herokuapp.com/',
            // url: 'http://localhost/projects',
        }).then(
            response => {
                setProjects(response.data);
            },
            error => {
                console.log(error);
            },
        );
    }, []);

    return (
        <div className="projects-container">
            {projects.map((project, id) => (
                <ProjectPreview key={id} {...project} />
            ))}
        </div>
    );
};
export default Projects;
