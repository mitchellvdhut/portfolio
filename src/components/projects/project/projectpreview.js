import React from 'react';
import './projectpreview.css';

const ProjectPreview = ({ title, previewtext, image, index }) => {
    return (
        <div className="project-preview">
            <a href={'/project/' + index}>
                <div className="project-preview-meta">
                    <h3>{title}</h3>
                    <p>{previewtext}</p>
                </div>
                <img className="project-image" src={image} alt={title} />
            </a>
        </div>
    );
};

export default ProjectPreview;
