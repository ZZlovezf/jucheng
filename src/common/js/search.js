import "../css/search.css"
import React,{Component} from "react"
export default class Search extends Component{
	render (){
		 return (
			<div className="search-header">
				<i>&lt;</i><p><b className="fa fa-search"></b><input type="text" placeholder="演出/艺人/场馆"/></p>
				<span>搜索</span>	
			</div>
		 )
	}
}