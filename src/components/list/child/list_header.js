import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom"
class list_Header extends Component {
     
    render() {
        let {clinsort} = this.props;
        let { cid } = this.props
        return (
            <div className="list_header">
                <Link to="/selectcity" className="city">
                    <span>{cid.name}</span>
                    <span>></span>
                </Link>
                <Link to="/search" className="list_search">
                  <span className="fa fa-search"></span>  搜索演出、艺人或场馆
                </Link>
                <a className="listsort"><span onClick={clinsort.bind(this)} className="fa fa-sort-amount-desc"></span></a>
            </div>
        );
    }
}

export default list_Header;
