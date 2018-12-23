import "../css/search.css";
import React, { Component } from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import store from "../../store"
class Search extends Component {
	constructor() {
		super()
		this.state = {
			hotlist: [
				{ id: 1, name: "摇滚红与黑" },
				{ id: 2, name: "贝隆夫人" },
				{ id: 3, name: "《猫》" },
				{ id: 4, name: "罗密欧与朱丽叶" },
				{ id: 5, name: "小野丽莎" },
				{ id: 6, name: "金锁记" },
				{ id: 7, name: "陈慧娴" }
			]
		}
	}
	render() {
		let num = store.getState().list.gg_city.cid;
		let { hotlist } = this.state;
		return (
			<div className="search">
				<div className="search-header">
					<i>&lt;</i>
					<p>
						<b className="fa fa-search"></b>
						<input type="text" ref="input" placeholder="演出/艺人/场馆" />
					</p>
					<span onClick={this.handlepush.bind(this)}>搜索</span>
				</div>
				<p>大家都在找</p>
				<div className="search_list">
					{
						hotlist.map((item, index) => {
							return <Link className="search_item" to={"/list?cid=" + num + "&k=" + item.name} key={index}>{item.name}</Link>
						})
					}
				</div>
			</div>
		)
	}
	handlepush() {
		let cid = store.getState().list.gg_city.cid;
		let k = this.refs.input.value
		 let url = `/list?cid=${cid}&k=${k}`
		 this.props.history.push(url)
	}
}

export default Search
	

