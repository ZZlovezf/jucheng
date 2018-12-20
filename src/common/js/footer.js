import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import "../css/footer.css"
class Footer extends Component {
  render() {
    return (
				<div id="footer">
					<ul>
						<li><NavLink to="/index"><p className="icon-box"></p><i className="txt">首页</i></NavLink></li>
						<li><NavLink to="/list"><p className="icon-box"></p><i className="txt">演出库</i></NavLink></li>
						<li><NavLink to="/ele"><p className="icon-box"></p><i className="txt">电子票</i></NavLink></li>
						<li><NavLink to="/my"><p className="icon-box"></p><i className="txt">我的</i></NavLink></li>
					</ul>	
				</div>
    );
  }
	
}

export default Footer;
