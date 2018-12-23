import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import Home from "./components/home/home"
import List from "./components/list/list"
import My from "./components/My/my"
import Ele from "./components/ele/ele"
import store from "./store"
import list_detail from "./components/list/child/list_detail"
import selectcity from "./components/list/child/selectcity"
import {Provider} from "react-redux"
import Search from "./common/js/search"
import Login from "./common/js/login"
import "./common/css/reset.css"
import "./common/js/flexble"
import "./common/css/home.css"
import MySecurity from "./components/My/mysecurity" 
import Register1 from "./common/js/register1"
import Register2 from "./common/js/register2"
import MyRoute from "./common/js/myRouter"
import Ticket from "./common/js/ticket"
class App extends Component {
	constructor() {
	    super()
		
		this.state=store.getState().home
		store.subscribe(this.handleUpdate.bind(this))
	}
  render() {
    return (
		<Provider store={store}>
		
      <Router>
       
      	<div className="con">
				<Switch>
				<Route path="/search" component={Search}/>
					<Route path="/register1" component={Register1}/>
					
					<Route path="/ele" component={Ele}/>
					<Route path="/mysecurity" component={MySecurity}/>
					<Route path="/index" component={Home}/>
					<Route path="/list" component={List}/>
					<Route path="/login" component={Login}/>
					{/* <Route path="/my" component={My}/> */
					/*  */
					/* <MyRoute flag={this.state.routerFlag} Login={Login} My={My} /> */
}
					
					
					
					{/* list */}
					<Route path="/list/detail" exact component={list_detail} />
					<Route path="/selectcity" component={selectcity} />
					<Route path="/ticket/:type" component={Ticket} />
					<MyRoute path="/my" component={My} flag={this.state.routerFlag} elsePath="/login"/>
					<MyRoute path="/register2" component={Register2} flag={this.state.routerFlag2} elsePath="/login"/>
					<Redirect path="/" to="/index"/>
					
				
					</Switch>
					
      	</div>
        
      </Router>
			</Provider>
    );
  }
  handleUpdate(){
	  this.setState(store.getState().home)
  }
}
export default App;
