import React, { Component } from 'react';
import Ele from "./components/ele/ele"
import {HashRouter as Router,Route,Link,NavLink,Switch,Redirect} from "react-router-dom";
import Home from "./components/home/home"
import List from "./components/list/list"
import My from "./components/My/my"
import store from "./store"
import {Provider} from "react-redux"
import {fetch} from "whatwg-fetch"
import "./common/css/reset.css"
import "./common/js/flexble"
import "./common/css/home.css"
class App extends Component {
  render() {
    return (
		<Provider store={store}>
      <Router>
        
      	<div>
				<Switch>
      		<Route path="/ele" component={Ele}/>
					<Route path="/index" component={Home}/>
					<Route path="/list" component={List}/>
					<Route path="/my" component={My}/>
					<Redirect path="/" to="/index"/>
					</Switch>
      	</div>
        
      </Router>
			</Provider>
    );
  }
	
	
	
}

export default App;
