import React, { Component } from 'react';
import Loading from "./pages/Loading";
import Sidebar from "./pages/Sidebar";
import loginJson from "./login.json";
import { observer } from "mobx-react";
import MainState from "./MainState";

import {
  Route,
} from 'react-router-dom';

import Login from "./pages/Login";
import Register from "./pages/Register";


import { Layout, Icon, Select, Popconfirm, message, Divider, Button, Row, Col } from 'antd';
const { Header, Sider, Content, } = Layout;
const { Option } = Select;

@observer export default class Home extends Component {
  state = {
    collapsed: false,
    locationSelected: null,
  };

  componentWillMount(){
  	setTimeout(()=>{MainState.finishLoading()},2000)
    MainState.loadData(loginJson)
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  handleChange = (item) => {
    MainState.selectKitchen(item);
  }

  confirm = (e) => {

    /*
      API Call to ACTIVATE Kitchen
    */
    MainState.kitchenIsActive = !MainState.kitchenIsActive 
    message.success('Your Kitchen is '+(MainState.kitchenIsActive ? "ACTIVATED" : "DE-ACTIVATED")+' Successfully');
  }

  cancel = (e) => {
    //console.log(e);
    //message.error('Click on No');
  }


  render() {
    return (
      MainState.isPageLoading ? (
      	<Loading />
      ) : (
      	<Layout style={{position: "fixed", top: 0, bottom: 0, left: 0, right: 0}}>
	        <Sider
            style={{background: "#fff"}}
	          trigger={null}
	          breakpoint=""
	          collapsible
	          collapsed={this.state.collapsed}
	        >
            <div className="logo" >
              Kitchen Manager
            </div>
	          <Sidebar data={loginJson.kitchens} />
	        </Sider>
	        <Layout>
	          <Header style={{ background: '#fff', padding: 0 }}>
	            <Icon
	              className="trigger"
	              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
	              onClick={this.toggle}
	            />
              <Row>
              <Col xs={18} sm={17} md={19} lg={19} xl={20}>
                  <Select style={{ width: 200 }} defaultValue={MainState.kitchenSelected} onSelect={this.handleChange} >
                    {
                      MainState.kitchenList.map((item) => {
                        return(
                          <Option key={item.id} value={item.name}>{item.name}</Option>
                        )
                      })
                    }
                  </Select>
                  <Divider type="vertical" />
                  <Popconfirm title={"Are you sure you want to "+(MainState.kitchenIsActive ? "CLOSE" : "ACTIVE")+" this Kitchen ?"} onConfirm={this.confirm} onCancel={this.cancel} okText="Yes" cancelText="No">
                    {
                      MainState.kitchenIsActive 
                      ? <Button type="primary" ghost>ACTIVE</Button>
                      : <Button type="danger" ghost>BUSY</Button>

                    }
                  </Popconfirm>
                </Col>
                <Col xs={4} sm={4} md={3} lg={2} xl={2}>
                  <Button>SIGNOUT</Button>
                </Col>
              </Row>
	          </Header>
	          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
	            <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
	          </Content>
	        </Layout>
	      </Layout>
      )
    );
  }
}
