import React from 'react';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';

import App from '../layouts/App/index';
import About from '../containers/About/index';
import Home from '../containers/Home/index';
import Contact from '../containers/Contact/index';
import Project from '../containers/Project/index';
import Skill from '../containers/Skill/index';

const route = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/project" component={Project}/>
            <Route path="/skill" component={Skill}/>
        </Route>
    </Router>
)
export default route;