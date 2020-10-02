import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Projects from '../projects/projects';
const About = React.lazy(() => import('../about/about'));
const CV = React.lazy(() => import('../cv/cv'));
const Contact = React.lazy(() => import('../contact/contact'));
const Project = React.lazy(() => import('../projects/project/project'));
const Router = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Projects} />
                <Route path="/about-me" component={About} />
                <Route path="/cv" component={CV} />
                <Route path="/contact" component={Contact} />
                <Route path="/project/:test" component={Project} />
            </Switch>
        </Suspense>
    );
};
export default Router;
