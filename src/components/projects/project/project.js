import React from 'react';
import './project.css';
import data from '../../../data.json';
import { useParams } from 'react-router-dom';

const projects = data.projects;

const Project = () => {
    let { test } = useParams();
    const { title, body, image } = projects.filter(
        project => project.index.toString() === test,
    )[0];

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
