import "../css/ticket.css"
import React,{Component} from "react"
import ReactDOM from "react-dom"
import {connect} from "react-redux"
import { ColorExtractor } from 'react-color-extractor'
class Ticket extends Component{
	render (){
		let {goBack,oneData}=this.props
		console.log(this.props.match.params.type,oneData)
		var one=oneData.data.filter((item)=>this.props.match.params.type===item.schedular_url.slice(-5))[0]
		console.log(one)
		 return (
			<div className="ticket">
				<header>
					<i onClick={goBack.bind(this)}>&lt;</i>
					
					<i class="fa fa-ellipsis-h"></i>
				</header>
				<section>
					<div class="bg" ref="imgbg">
						<div class="img-bg" >
							<ColorExtractor getColors={colors => {this.refs.imgbg.style.background=colors[0]}}>
								  <img src={one.pic}  />
								</ColorExtractor>
	
							<span class="logo_i"></span>
						</div>
						<div class="poster-fg"></div>
					</div>
					<article>
						<h3 class="title">{one.show_name}</h3>
						<p class="row">时间:{one.display_show_time}</p>
						<p class="f1">场馆:{one.venue_name}</p>
						<p class="price">￥{one.show_price}</p>
						
					</article>
					<div class="ticket-notice">
						<h3 class="title">购票须知</h3>
						<div class="ticket-txt">
							<p>1.为避免快递配送不能及时到达，距演出开场时间少于3天不提供快递服务，您可以选择电子票或者在线支付后上门自取纸质票。（主办演出可在演出现场取票）。</p>
							<p>2.网上订购请提前选择您意欲购买的演出和票品价位，根据流程提示完成订票。</p>
							<p>3.成功下单后，我们将短信与你确认订单信息，如有任何疑问，请致电我们的客服热线：400-185-8666，客服人员将第一时间为您服务。</p>
							<p>4.因票品的特殊性，一经订购，不退不换，请订票前务必确认购买意向。</p>
						</div>
						<div class="in-to-know">
							入场须知： <span class="text">1.2米以下儿童谢绝入场，1.2米以上儿童需持票入场。</span>
						</div>
					</div>
				</section>
				<footer>
					<ul>
						<li><i className="fa fa-headphones"></i>客服</li>
						<li>立即购票</li>
						<li>在线选座</li>
					</ul>
				</footer>
			</div>
		 )
	}
	componentDidMount(){
		
	}
}
const mapStateToProps=(state)=>({
	oneData:state.home.oneData
})
const mapDispatchToProps=(dispatch,props)=>({
	goBack(){
		props.history.goBack()
	}
})
export default connect(mapStateToProps,mapDispatchToProps)(Ticket)