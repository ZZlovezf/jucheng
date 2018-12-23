import React,{Component} from "react";
import "../../../common/css/my.css"
import {Link} from "react-router-dom"
export default class MyCon extends Component{
	constructor() {
	    super();
		this.state=JSON.parse(sessionStorage.getItem("user"))
		console.log(JSON.parse(sessionStorage.getItem("user")).name)
	}
	render(){
		return(
			<div className="myCon">
				<div class="main-top js-bg plus-top">
                    <Link to="/mysecurity">
                    	<div>
                    		<img class="head-logo __web-inspector-hide-shortcut__" src="https://m.juooo.com/public/basic/Home/app/app-juooo4/images/common/logo-user.png"/>
                    	</div>
                    </Link>
	                <p class="name">
						<span class="nickname">{this.state.name}</span>
						<span class="grade">ID:{this.state.id}</span>
						<Link to="/mysecurity">

						<i>&gt;</i>
						</Link>
					</p>
					<div class="plusModel-rowTxt" ref="plusModel">
					</div>
					<div class="card_line isShow card_nopurchase" style={{"display": 'block'}}>
                            <img src="https://m.juooo.com/public/basic//Home/app/app-juooo4/images/index/icon_cardLine.png" alt="" class="isIcon icon_cardLine" ref="isIcon"/>
                     </div>

                </div>
				<section>
					<ul className="myHave">
						<li className="have"><p>0.00<span>元</span></p><b>余额</b></li>
						<li className="have"><p>6<span>分</span></p><b>积分</b></li>
						<li className="have"><p>0<span>张</span></p><b>橙卡</b></li>
						<li><p>0<span>张</span></p><b>优惠卷</b></li>
					</ul>
					<ul className="myList">
						<li><span class="fa fa-file-text-o"></span>我的订单</li>
						<li><span class="fa fa-ticket"></span>电子票夹</li>
						<li><span class="fa fa-suitcase"></span>我的卡包</li>
						<li><span class="fa fa-diamond"></span>会员中心</li>
						<li><span class="fa fa-star-o"></span>我的关注</li>
						<li><span class="fa fa-map"></span>收货地址</li>
						<li><span class="fa fa-envelope-open-o"></span>我的消息</li>
						<li><span class="fa fa-commenting"></span>意见反馈</li>
						<li><span class="fa fa-headphones"></span>联系电话</li>
					</ul>
					<a id="juo-meiqia" class="online-sever">
						<span class="fa fa-headphones"></span>
						<span>在线客服</span>
					</a>
				</section>
				
			</div>
		)
	}
	componentDidMount(){
		setTimeout(()=>{
			this.refs.plusModel.style.bottom=-0.1+"rem"
			this.refs.plusModel.style.opacity=1
			setTimeout(()=>{
				console.log(this.refs.isIcon.left)
				this.refs.isIcon.style.left=800+"px"
			},600)
		},1000)
		
	}
}