import React from 'react';
import './form.css';

const Form = () => {
    return (
        <form action="/form-submit" method="POST">
            <input type="text" placeholder="Naam" />
            <input type="email" placeholder="email" />
            <input type="text" placeholder="onderwerp" />
            <textarea placeholder="Beschrijving" />
            <input type="submit" value="Versturen" />
        </form>
    );
};

export default Form;
