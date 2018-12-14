import React, { Component } from 'react';
import "../common/css/footer.css"
import {HashRouter as Router,Route,Link,NavLink,Switch} from "react-router-dom";
import Home from "./page/home"
import List from "./page/list"
import My from "./page/home"
class Idx extends Component {
  render() {
    return (
		<Router>
			<div>
				<Route path="/home/index" component={Home}/>
				<Route path="/home/list" component={List}/>
				<Route path="/home/my" component={My}/>
			
			<div id="footer">
				
				<ul>
					<li><NavLink to="/home/index">首页</NavLink></li>
					<li><NavLink to="/home/list">演出库</NavLink></li>
					<li><NavLink to="/ele">电子票</NavLink></li>
					<li><NavLink to="/home/my">我的</NavLink></li>
				</ul>	
			</div>
			</div>
		</Router>
    );
  }
}

export default Idx;
