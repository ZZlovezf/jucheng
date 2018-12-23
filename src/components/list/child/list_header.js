import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom"
class list_Header extends Component {
    render() {
        let { cid } = this.props
        return (
            <div className="list_header">
                <Link to="/selectcity" className="city">
                    <span>{cid.name}</span>
                    <span>></span>
                </Link>
                <Link to="/search" className="list_search">
                    搜索演出、艺人或场馆
                </Link>
                <Link to=""></Link>
                <a>查</a>
            </div>
        );
    }
}

export default list_Header;
