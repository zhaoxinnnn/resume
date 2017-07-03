import React from 'react';
import {Link,IndexLink} from 'react-router';

import Menu from '../Menu/index';
import './index.css';
export default class App extends React.Component{
    render(){
        return <div className="app">
            <div className="app-menu">
                <Menu/>
            </div>
            <div className="app-container">
                {this.props.children}
            </div>
        </div>
    }
}