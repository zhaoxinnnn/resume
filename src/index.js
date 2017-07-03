import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';

import Home from './component/Home';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home}></Route>
    </Router>
);

ReactDOM.render(<routes/>,document.getElementById("app"));