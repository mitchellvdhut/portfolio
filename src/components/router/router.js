import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Projects from '../projects/projects';
import About from '../about/about';
import Contact from '../contact/contact';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Projects} />
            <Route path="/about-me" component={About} />
            <Route path="/contact" component={Contact} />
        </Switch>
    );
};
export default Router;
