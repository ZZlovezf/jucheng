import React,{Component} from "react"
import "../css/login.css"
import store from "../../store"
export default class Register1 extends Component{
	constructor() {
	    super();
		this.state={
			inputVal:""
		}
	}
	render(){
		return(
		<div className="login">
			<header>
				<i onClick={this.goback.bind(this)}>&lt;</i><span onClick={this.goLogin.bind(this)}>登陆</span>
			</header>
			<section>
				<p>账号注册</p>
				<ul className="phone-login">
					<li><input type="text" value={this.state.inputVal} onChange={this.handleChange.bind(this)} placeholder="请输入手机号"/></li>			
				</ul>
				
				<button onClick={this.next.bind(this)}>下一步</button>
			</section>
		</div>
		)
		
	}
	handleChange(e){
		let val=e.target.value
		this.setState({inputVal:val})
	}
	next(){
		sessionStorage.setItem("phone",this.state.inputVal)
		
		store.dispatch({
			type:"CHANGE_REGISTERSTATE",
			value:true
		})
		this.props.history.push("/register2")
	}
	goback(){
		this.props.history.goBack()
	}
	goLogin(){
		this.props.history.push("/login")
	}
}