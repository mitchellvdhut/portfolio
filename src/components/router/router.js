import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Projects from '../projects/projects';
import About from '../about/about';
import Contact from '../contact/contact';
import CV from '../cv/cv';
import Project from '../projects/project/project';

const Page404 = () => {
    return (
        <div>
            <h1>Error 404 - Page can not be found</h1>
        </div>
    );
};

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Projects} />
            <Route path="/about-me" component={About} />
            <Route path="/cv" component={CV} />
            <Route path="/contact" component={Contact} />
            <Route path="/project/:id" component={Project} />
            <Route component={Page404} />
        </Switch>
    );
};
export default Router;
