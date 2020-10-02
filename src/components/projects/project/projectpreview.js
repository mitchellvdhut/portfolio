import React from 'react';
import './projectpreview.css';
import { Link } from 'react-router-dom';

const ProjectPreview = ({ title, previewtext, image, index }) => {
    return <Link to={`/project/${index}`}>{title}</Link>;
};

export default ProjectPreview;
