import React,{Component} from "react"
import "../../common/css/mysecurity.css"
import store from "../../store"
export default class MySecurity extends Component{
	constructor() {
	    super()
		this.state=store.getState().home
	}
	render(){
		return(
			<div className="mysecurity">
				<header>
					<i onClick={this.goBack.bind(this)}>&lt;</i>
					<span>账户登陆</span>
					<i class="fa fa-ellipsis-h"></i>
				</header>
				<section>
					<ul>
						<li className="have">头像</li>
						<li>昵称</li>
						<li className="have">手机号</li>
						<li className="have">邮箱</li>
						<li className="have">生日信息</li>
						<li className="have">密码登陆</li>
						<li className="have">支付密码</li>
						<li className="have">实名认证</li>
						<li className="have">学生身份验证</li>
						<li>Young身份验证</li>
					</ul>
					<button onClick={this.quit.bind(this)}>
						退出登录
					</button>
				</section>
			</div>
		)
	}
	componentWillMount(){
		if(!this.state.routerFlag){
			this.props.history.push("/index")
		}
	}
	goBack(){
		this.props.history.goBack()
	}
	quit(){
		sessionStorage.clear()
		this.props.history.push("/index")
	}
}