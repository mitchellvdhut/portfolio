import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Projects from '../projects/projects';
import About from '../about/about';
import Contact from '../contact/contact';
import CV from '../cv/cv';
import Project from '../projects/project/project';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Projects} />
            <Route path="/about-me" component={About} />
            <Route path="/cv" component={CV} />
            <Route path="/contact" component={Contact} />
            <Route path="/project/:id" component={Project} />
        </Switch>
    );
};
export default Router;
