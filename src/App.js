import React, { Component } from 'react';
import {HashRouter as Router,Route,Link,NavLink,Switch,Redirect} from "react-router-dom";
import Home from "./components/home/home"
import List from "./components/list/list"
import My from "./components/My/my"
import Ele from "./components/ele/ele"
import store from "./store"
import {Provider} from "react-redux"
import Search from "./common/js/search"
import Login from "./common/js/login"
import "./common/css/reset.css"
import "./common/js/flexble"
import "./common/css/home.css"

class App extends Component {
  render() {
    return (
		<Provider store={store}>
		
      <Router>
       
      	<div className="con">
				<Switch>
				<Route path="/search" component={Search}/>

      		<Route path="/ele" component={Ele}/>
					<Route path="/index" component={Home}/>
					<Route path="/list" component={List}/>
					<Route path="/my" component={My}/>
					<Route path="/login" component={Login}/>
					<Redirect path="/" to="/index"/>
					</Switch>
      	</div>
        
      </Router>
			</Provider>
    );
  }

	
	
}

export default App;
