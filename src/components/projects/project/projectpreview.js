import React from 'react';
import './projectpreview.css';
import { Link } from 'react-router-dom';

const ProjectPreview = ({ title, description, image, _id: { $oid } }) => {
    return (
        <div className="project-preview">
            <Link to={`/project/${$oid}`}>
                <div className="project-preview-meta">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <img className="project-image" src={image} alt={title} />
            </Link>
        </div>
    );
};

export default ProjectPreview;
