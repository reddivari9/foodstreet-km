import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
// import { API } from "./actions";

import Login from "./pages/Login";
import Home from "./Home";


export default class Main extends Component {
	state = {
		isAuth: true
	}

	componentWillMount(){
		// fetch("./login.json",{method:"get"})
		// 	.then((response)=>{
		// 		return response.json()
		// 	}).then((response)=>{
		// 		console.log(response)
		// 	}).catch((error)=>{
		// 		console.log(error)
		// 	})
	}

	render(){
		return(
			<Router>
				<div>
					<Route exact path="/" render={() => (
						this.state.isAuth ? (
							<Redirect to="/dashboard"/>
						): (
							<Redirect to="/login"/>
						)
					)}/>
					<Route path="/dashboard" component={Home} />
					<Route path="/login" component={Login} />
				</div>
			</Router>
		)
	}
}