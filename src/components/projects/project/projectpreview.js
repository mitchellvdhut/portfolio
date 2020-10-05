import React from 'react';
import './projectpreview.css';
import { Link } from 'react-router-dom';

const ProjectPreview = ({ title, previewtext, image, index }) => {
    return (
        <div className="project-preview">
            <Link to={`/project/${index}`}>
                <div className="project-preview-meta">
                    <h3>{title}</h3>
                    <p>{previewtext}</p>
                </div>
                <img className="project-image" src={image} alt={title} />
            </Link>
        </div>
    );
};

export default ProjectPreview;
