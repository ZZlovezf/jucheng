import React,{Component,Fragment} from "react"
import {Link} from "react-router-dom"
export default class Hots extends Component{
	constructor() {
	    super()
		this.state={
			flag:true
		}
	}
	render(){
		let {data}=this.props
		return (
			<Fragment>
				<div className="hot-wrap">
					<div className="title">热门演出
						<div className="switch-bar" onClick={this.handleSwitch.bind(this)}></div>
					</div>
					<div className="list-wrap1" style={{display:"flex"}} ref="wrap1">
						{
							data.data.map((item,index)=>{
									return  <Link className="show-item1 clearfix " to={"/ticket/"+item.schedular_url.slice(-5)} key={index}>
							<div className="poster-box">
								<img className="poster-pic" src={item.pic}
									alt={item.show_name}/>																					
								</div>										
								<div className="poster-ctn">			
								<p className="poster-name">{item.show_name}</p>										
								<p className="poster-time">{item.display_show_time}<span class="poster-address">{item.city_name}</span></p>
							</div>									
						</Link>
							})
						}
						
					</div>
					<div className="list-wrap" style={{display:"none"}} ref="wrap">
							{
								data.data.map((item,index)=>{
									return <a class="show-item clearfix " href={item.schedular_url} key={index}>	
								<div class="show-left fl ">							
								<img src={item.pic} 
								alt={item.show_name}/>	
								</div>										
							<div class="show-right fl">												
							<p class="title">{item.show_name}</p>												
							<p class="show-time ">													
							<span class="day ">{item.display_show_time}</span>	
							</p>
							<p class="show-venue ">	
							<span class="city ">{item.city_name}</span>
							<span class="vunue ">{item.venue_name}</span>	
								</p>	
						<div class="price clearfix ">
								<div class="start-price">
								<i class="icon icon-yuan ">¥</i>
						<span class="yuan ">{item.show_price.split("-")[0]} </span>
							<span class="start-hint">元起</span>
							</div>	
							</div>
							</div>
								</a>
								})
							}
								
					</div>
					
				</div>
			</Fragment>
		)
	}
	handleSwitch(){
		if(this.state.flag){
			this.refs.wrap1.style.display="none"
			this.refs.wrap.style.display="block"
			this.setState({flag:false})
		}else{
			this.refs.wrap1.style.display="flex"
			this.refs.wrap.style.display="none"
			this.setState({flag:true})
		}
	}
}