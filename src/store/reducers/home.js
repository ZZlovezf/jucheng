const defaultState={
	oneData:{
		code:1,
		data:[],	
	},
	routerFlag:false,
	loginUser:'',
	loginUpwd:'',
	registerUpwd:"",
	routerFlag2:false
}
export default (state=defaultState,action)=>{
	let newState=JSON.parse(JSON.stringify(state))
	switch(action.type){
		case "ONE_DATA_FULFILLED":newState.oneData=action.payload;return newState;
		case "LOGIN_CHANGE" :
		if(action.style==1){
			newState.loginUser=action.value;
			return newState
		}else{
			newState.loginUpwd=action.value;
			return newState
		}
		case "LOGIN_INFO_FULFILLED":
			if(action.payload==1){
				newState.loginUser=""
				newState.loginUpwd=""
				newState.routerFlag=true
				console.log(newState.routerFlag)
				alert("登陆成功")
				return newState
			}else{
				newState.loginUser=""
				newState.loginUpwd=""
				newState.routerFlag=false
				alert("用户名密码不正确")
				return newState
			}
		case "REGISTER_CHANGE" :newState.registerUpwd=action.value;return newState;
		case "REGISTER_INFO_FULFILLED" :
		if(action.payload==1){
			newState.registerUpwd=""
			newState.routerFlag2=true
			return newState
		}else{
			newState.registerUpwd=""
			//newState.routerFlag2=false
			return newState
		}
		case "CHANGE_REGISTERSTATE" :newState.routerFlag2=action.value;return newState;
		case "DRAWING_ACTION" :newState.routerFlag=action.flag;return newState
			
	}
	return state
}