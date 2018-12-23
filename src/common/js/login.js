import React,{Component} from "react"
import "../css/login.css"
import crypto from "crypto"
import {connect} from "react-redux"
import {loginInp_action,login_action} from "../../action/actionCreator"
import PropTypes from 'prop-types'
class Login extends Component{
	render(){
		let {loginUser,loginUpwd,loginHandleChange,login}=this.props
		
		return(
		<div className="login">
			<header>
				<i onClick={this.goback.bind(this)}>&lt;</i><span onClick={this.goRegister.bind(this)}>注册</span>
			</header>
			<section>
				<p>欢迎来到聚橙网</p>
				<ul className="phone-login">
					<li><input type="text" value={loginUser} onChange={loginHandleChange.bind(this,1)} placeholder="请输入手机号/邮箱"/></li>
					<li><input type="text" value={loginUpwd} onChange={loginHandleChange.bind(this,2)} placeholder="请输入密码"/></li>
					<li><i>验证码登陆&gt;</i><span>忘记密码</span></li>
				</ul>
				
				<button onClick={login.bind(this,loginUser,loginUpwd)}>登陆</button>
			</section>
		</div>
		)		
	}
	goRegister(){
		this.context.router.history.push("/register1")
		
	}
	goback(){
		this.context.router.history.goBack()
	}
	

}
const mapStateToProps=(state)=>({
	loginUser:state.home.loginUser,
	loginUpwd:state.home.loginUpwd
})
const mapDispatchToProps=(dispatch,props)=>({
	loginHandleChange(style,e){
		let val=e.target.value
		
		dispatch(loginInp_action(val,style))
	},
	login(loginUser,loginUpwd){
		console.log(loginUser,loginUpwd)
		let obj={loginUser,loginUpwd}
		dispatch(login_action(obj))
		setTimeout(()=>{
			this.context.router.history.push("/my")
		},2000)
		
	}
	
	
})
Login.contextTypes = {
  router: PropTypes.object.isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)

/* 	export default {
		data() {
			return {
				uname:"",
				upwd:'',
				back:""
			}
		},
		methods:{
			login(){
				var telreg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
				if(!telreg.test(this.uname)){
					alert("电话号格式不正确")
					return
				}
				const hash = crypto.createHmac('sha256',this.upwd)
				.update('I love cupcakes')
				.digest('hex');
					this.$http.get("http://localhost:3000/user?_name="+this.uname+"&pwd="+hash).then(res=>{
						if(res.data.length===0){
							alert("登录失败")
						}else{
							sessionStorage.setItem("user",this.uname)
							this.$router.push("/home/index")
						}
				})
			}
		}
	} */