import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Projects from '../projects/projects';
import About from '../about/about';
import CV from '../cv/cv';
import Contact from '../contact/contact';
import Project from '../projects/project/project';
import Inbox from '../inbox/inbox';
import MessageDetail from '../inbox/messagedetail';
import AddProject from '../user/addproject';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Projects} />
            <Route path="/about-me" component={About} />
            <Route path="/cv" component={CV} />
            <Route path="/contact" component={Contact} />
            <Route path="/project/:id" component={Project} />
            <Route path="/inbox/:id" component={MessageDetail} />
            <Route path="/inbox" component={Inbox} />
            <Route path="/add" component={AddProject} />
        </Switch>
    );
};
export default Router;
