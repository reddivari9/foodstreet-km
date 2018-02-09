import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;

export default class Sidebar extends Component {
	constructor(props){
		super(props);
		this.state ={
			menu: props.data,
			selected: ["1"]
		}
	}
	selected = (item) => {
		this.setState({
			selected: item.selectedKeys
		})
	}
	render(){
		return(
	          <Menu theme="light" mode="inline" defaultSelectedKeys={this.state.selected} onSelect={this.selected}>
	          	{
	          		this.state.menu.map((item) => {
	          			if(!Array.isArray(item))
		          			return(
		          				<Menu.Item key={item.id}>
					              <Icon type="user" />
					              <span>{item.name}</span>
					              <Link to="/login">{item.name}</Link>
					            </Menu.Item>
		          			)
		          		else
		          			return(
		          				<SubMenu
			          				key="sub1"
	                                title={
	                                    <span>
	                                        <Icon type="mail" />
	                                        <span>Navigation One</span>
	                                    </span>
	                                }
	                            >
		          				{
		          					item.map((inItem) => {
		          						return(
		          							<Menu.Item key={inItem.id}>
								              <Icon type="user" />
								              <span>{inItem.name}</span>
								              <Link to="/item3">{inItem.name}</Link>
								            </Menu.Item>
		          						)
		          					})
		          				}
		          				</SubMenu>
		          			)
	          		})
	          	}
	          </Menu>
		)
	}
}
