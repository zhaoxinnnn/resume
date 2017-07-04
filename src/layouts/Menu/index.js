import React,{Component} from 'react';
import {Link} from 'react-router';
import {Menu,Icon} from 'antd';

export default class MenuList extends Component{
    render () {
        var data = [
            {"path" : "/home","msg":"首页"},
            {"path" : "/about","msg":"关于我"},
            {"path" : "/skill","msg":"工作技能"},
            {"path" : "/project","msg":"项目经验"},
            {"path" : "/contact","msg":"联系我"}
        ]
        return (
            <div>
                <h1>这是导航菜单</h1>
                <Menu mode="inline"
                      defaultSelectedKeys={["home"]}>
                    <Menu.Item className="menu-text" key="home">
                        <Link to="/home">首页</Link>
                    </Menu.Item>
                    <Menu.Item className="menu-text" key="contact">
                        <Link to="/contact">联系我</Link>
                    </Menu.Item>
                    <Menu.Item className="menu-text" key="about">
                        <Link to="/about">关于我</Link>
                    </Menu.Item>
                    <Menu.Item className="menu-text" key="skill">
                        <Link to="/skill">技能</Link>
                    </Menu.Item>
                    <Menu.Item className="menu-text" key="project">
                        <Link to="/project">项目</Link>
                    </Menu.Item>
                </Menu>
            </div>
        )

    }
}