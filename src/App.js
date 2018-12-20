import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import Home from "./components/home/home"
import List from "./components/list/list"
import My from "./components/My/my"
import Ele from "./components/ele/ele"
import store from "./store"
import list_detail from "./components/list/child/list_detail"
import selectcity from "./components/list/child/selectcity"
import { Provider } from "react-redux"
import { fetch } from "whatwg-fetch"
import "./common/css/reset.css"
import "./common/js/flexble"
import "./common/css/home.css"
const qs = require("querystring")
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>

					<div className="con">
						<Switch>
							<Route path="/ele" component={Ele} />
							<Route path="/index" component={Home} />
							<Route path="/list" component={List} />
							<Route path="/my" component={My} />
							<Redirect path="/" to="/index" />

							{/* list */}
							<Route path="/list/detail" exact component={list_detail} />
							<Route path="/selectcity" component={selectcity} />
						</Switch>
					</div>

				</Router>
			</Provider>
		);
	}
	componentDidMount() {
		let obj = {
			city_id: -1,
			category: 0,
			keywords: "",
			activity_id: 0,
			sort_type: 0,
			page: 1
		}
		fetch("/Show/getShowList", {
			method: "post",
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			},
			body: qs.stringify(obj)
		}).then(res => res.json()).then(data => { })
	}



}

export default App;
