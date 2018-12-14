import React, { Component } from 'react';
import Idx from "./components/idx"
import Ele from "./components/ele"
import {HashRouter as Router,Route,Link,NavLink,Switch} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
      	<div>
      		<Route path="/home" component={Idx}/>
      		<Route path="/ele" component={Ele}/>
      	</div>
      </Router>
    );
  }
}

export default App;
