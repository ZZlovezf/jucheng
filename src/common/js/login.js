import React,{Component} from "react"
import "../css/login.css"
export default class Login extends Component{
	render(){
		return(
		<div className="login">
			<header>
				<i>&lt;</i><span>注册</span>
			</header>
			<section>
				<p>欢迎来到聚橙网</p>
				<ul className="phone-login">
					<li><input type="text" placeholder="请输入手机号/邮箱"/></li>
					<li><input type="text" placeholder="请输入密码"/></li>
					<li><i>验证码登陆&gt;</i><span>忘记密码</span></li>
				</ul>
				
				<button>登陆</button>
			</section>
		</div>
		)
		
	}
}