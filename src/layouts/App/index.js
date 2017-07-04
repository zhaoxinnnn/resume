import React from 'react';

import MenuList from '../Menu/index';
import './index.css';
export default class App extends React.Component{
    render(){
        return <div className="app">
            <div className="app-menu">
                <MenuList/>
            </div>
            <div className="app-container">
                {this.props.children}
            </div>
        </div>
    }
}