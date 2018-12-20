import React, { Component } from 'react';
import {NavLink,Link} from "react-router-dom"
class list_Header extends Component {
    constructor(){
        super()
        
    }
    static defaultProps = {
        address :"全国"
    }
  render() {
      let {address} = this.props
		return (
			<div className="list_header">
                <Link to="/selectcity" className="city">
                    <span>{address}</span>
                    <span>></span>
                </Link>
                <Link to="/https://m.juooo.com/search/index">
                搜索演出、艺人或场馆
                </Link>
                <a>查</a>
			</div>
		);
  }
}

export default list_Header;
