import React,{Component} from "react"
import "../css/login.css"
import PropTypes from 'prop-types'
import {registerInp_change,register_action} from "../../action/actionCreator"
import {connect} from "react-redux"
class Register2 extends Component{
	render(){
		let {registerUpwd} =this.props
		return(
		
		<div className="login">
			<header>
				<i onClick={this.goback.bind(this)}>&lt;</i><span onClick={this.handleLogin.bind(this)}>登陆</span>
			</header>
			<section>
				<p>账号注册</p>
				<ul className="phone-login">
					<li><input type="text" placeholder="请输入验证码"/></li>
					<li><input type="text" value={registerUpwd} onChange={this.props.registerChange.bind(this)} placeholder="请设置6-20位密码"/></li>
					
				</ul>
				
				<button onClick={this.props.register.bind(this,registerUpwd)}>注册</button>
				<p class="login-tip" >验证码已发送至手机：<i>{sessionStorage.getItem("phone")}</i></p>
			</section>
		</div>
		)
		
	}
	goback(){
		this.context.router.history.goBack()
	}
	handleLogin(){
		this.context.router.history.push("/login")
	}
}
const mapStateToProps=(state)=>({
	registerUpwd:state.home.registerUpwd
})
const mapDispatchToProps=(dispatch,props)=>({
	registerChange(e){
		let val=e.target.value
		dispatch(registerInp_change(val))
	},
	register(registerUpwd){
		dispatch(register_action(registerUpwd))
		this.context.router.history.push("/login")
	}
})
Register2.contextTypes = {
  router: PropTypes.object.isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(Register2)