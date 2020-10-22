import React from 'react';
import './about.css';

const about = () => {
    return (
        <div className="content">
            <section className="about">
                <div className="personal">
                    <h1>Over mij</h1>
                    <p>
                        Mijn naam is Mitchell van der Hut, ik ben 25, kom uit
                        Den Haag en ik studeer Open-ICT aan de Hogeschool
                        Utrecht. Ik heb hier voor de MBO-opleiding Interactive
                        Media Design gedaan in Rotterdam.
                        <br />
                        <br />
                        Naast school werk ik deeltijd bij MediaMarkt Hoog
                        Catherijne als verkoopmedewerker. In mijn vrije tijd ben
                        ik ook graag bezig met het ontwerpen en programmeren van
                        side-projects.
                        <br />
                        <br />
                        Ik weet nog niet welke richting ik uit wil na de
                        opleiding, dus ik hoop daar achter te komen door zo veel
                        mogelijk te proberen.
                    </p>
                </div>
                <img className="portrait" src="assets/mitchell.jpg" alt="me" />
            </section>
        </div>
    );
};
export default about;
