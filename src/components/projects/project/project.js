import React, { useEffect, useState } from 'react';
import './project.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Project = () => {
    const { id } = useParams();
    const [projects, setProjects] = useState();

    useEffect(() => {
        axios({
            method: 'get',
            url: `https://mitchellvdhut-api.herokuapp.com/project/${id}`,
        }).then(
            response => {
                setProjects(response.data);
            },
            error => {
                console.log(error);
            },
        );
    }, [id]);

    if (!projects) return <p>loading...</p>;

    const { title, body, image } = projects;

    return (
        <div className="content">
            <section className="about">
                <div className="personal">
                    <h1>{title}</h1>
                    <p>{body}</p>
                </div>
                <img className="portrait" src={image} alt={title} />
            </section>
        </div>
    );
};

export default Project;
