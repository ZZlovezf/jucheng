import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
class Header extends Component {
  render() {
		return (
				<header class="navbar ind-header">
					<div class="left">
						<a class="link">
							<img src="https://m.juooo.com/public/basic//Home/app/app-juooo5/images/index/location.png"/>
							<span class="city">全国</span>
						</a>

					
				</div>
				<a class="center" href="https://m.juooo.com/search/index">搜索演出、艺人或场馆</a>
			</header>
		);
  }
}

export default Header;
