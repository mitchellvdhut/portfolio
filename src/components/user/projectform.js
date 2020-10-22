import React from 'react';
import './projectform.css';

const ProjectForm = () => {
    return (
        <form>
            <input type="text" placeholder="Naam" />
            <input type="email" placeholder="email" />
            <input type="text" placeholder="onderwerp" />
            <textarea placeholder="Beschrijving" />
            <input type="submit" value="Versturen" />
        </form>
    );
};

export default ProjectForm;
