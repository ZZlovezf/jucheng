import React ,{Component} from "react";
import {Route,Redirect} from "react-router-dom";
export default class MyRoute extends Component{
    render(){
        let {path,component,flag,elsePath} = this.props;
		console.log(this.props)
        return (
            flag?<Route path={path} component={component}/>:<Redirect to={elsePath}/>
        )
    }
}