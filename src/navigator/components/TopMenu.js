import React, { Component } from 'react'
import { Menu, Icon, Select } from 'antd'
import { Link } from 'react-router'

const Item = Menu.Item;
const Option = Select.Option;

class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        let active;
        try {
            active= props.routes[1].path
        } catch (e) {
            active= 'index'
        }
        this.state = { active }
    }
    handleClick(e) {
        this.setState({ active: e.key })
    }
    render() {
        return (
            <header className="top-menu">
                <div className="version">
                    <span>iCode</span>
                </div>
                <Select value="zh-CN">
                    <Option key="zh-CN">简体中文</Option>
                    <Option key="en">English</Option>
                </Select>
                <Menu mode="horizontal" selectedKeys={[this.state.active]} onClick={this.handleClick}>
                    <Item key="index">
                        <Link to="/index"><Icon type="home" />首页</Link>
                    </Item>
                    <Item key="sample">
                        <Link to="/sample"><Icon type="appstore-o" />示例</Link>
                    </Item>
                    <Item key="editor">
                        <Link to="/editor"><Icon type="code-o" />编辑器</Link>
                    </Item>
                </Menu>
            </header>
        )
    }
}

export default TopMenu