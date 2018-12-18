import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import "../css/footer.css"
class Footer extends Component {
  render() {
    return (
				<div id="footer">
					<ul>
						<li><NavLink to="/index">但是</NavLink></li>
						<li><NavLink to="/list">演出库</NavLink></li>
						<li><NavLink to="/ele">电子票</NavLink></li>
						<li><NavLink to="/my">我的</NavLink></li>
					</ul>	
				</div>
    );
  }
	
}

export default Footer;
