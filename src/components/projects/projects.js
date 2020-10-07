import React, { useEffect, useState } from 'react';
import ProjectPreview from './project/projectpreview';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://mitchellvdhut-api.herokuapp.com/',
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
