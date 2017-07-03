import React,{Component} from 'react';
import {Link} from 'react-router';
import {Menu,Icon} from 'antd';

export default class Menu extends Component{
    render () {
        var data = [
            {"path" : "/","msg":"首页"},
            {"path" : "/about","msg":"关于我"},
            {"path" : "/skill","msg":"工作技能"},
            {"path" : "/project","msg":"项目经验"},
            {"path" : "/contact","msg":"联系我"}
        ]
        return (
            <div>
                <h1>这是导航菜单</h1>
                <Menu mode="inline"
                      defaultSelectedKeys={["home"]}
                >
                    <Menu.Item className="menu-text">

                    </Menu.Item>
                </Menu>
            </div>
        )

    }
}