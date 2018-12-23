const qs = require("querystring");
export const get_one_action = (dispatch) => {
	dispatch({
		type: "ONE_DATA",
		payload: new Promise(resolve => {
			fetch("/index/hotsShowList").then(res => {
				return res.json()
			}).then(json => {
				resolve(json)
			})
		})
	})
}

export const GG_getcity = (dispatch, arr) => {
	dispatch({
		type: "GG_CITY",
		citylist: arr
	})
}
export const GG_getdatatype = (dispatch, arr) => {
	dispatch({
		type: "GG_GETDATATYPE",
		val: arr
	})
}

export const GG_showdata = (dispatch, obj) => {
	dispatch({
		type: "GG_Data",
		payload: new Promise(resolve => {
			fetch("/Show/getShowList", {
				method: "post",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
				},
				body: qs.stringify(obj)
			}).then(res => res.json())
				.then(data => {

					resolve(data)
				})
		})
	})
}
export const GG_getNewDate = (dispatch, obj) => {
	dispatch({
		type: "GG_newData",
		payload: new Promise(resolve => {
			fetch("/Show/getShowList", {
				method: "post",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
				},
				body: qs.stringify(obj)
			}).then(res => res.json())
				.then(data => {
					resolve(data)
				})
		})
	})
}
export const loginInp_action=(val,style)=>({
	type:"LOGIN_CHANGE",
	value:val,
	style:style
})
export const login_action=(obj)=>({
	type:"LOGIN_INFO",
	payload:new Promise(resolve=>{
		
		fetch("http://localhost:5000/user?name="+obj.loginUser+"&pwd="+obj.loginUpwd,{
			method:"get",
		}).then(res=>res.json())
		.then(data=>{
			if(data.length==1){
				sessionStorage.setItem("user",JSON.stringify({"name":data[0].name,"id":data[0].id}))
				resolve(1)	
			}else{
				resolve(0)	
			}
				
		})
	})
})
export const registerInp_change=(val)=>({
	type:"REGISTER_CHANGE",
	value:val
})
export const register_action=(upwd)=>({
	type:"REGISTER_INFO",
	payload:new Promise(resolve=>{
		let name=sessionStorage.getItem("phone")
		fetch("http://localhost:5000/user?name="+name,{
			method:"get"
		}).then(res=>res.json())
		.then(data=>{
			if(data.length==1){
				alert("该账号已经被注册过")
				resolve(0)
				
			}else{
				fetch("http://localhost:5000/user",{
					method:"post",
					headers:{
						'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
					},
					body:qs.stringify({"name":name,"pwd":upwd})
				}).then(res=>res.json())
				.then(data=>{
					resolve(1)
					alert("注册成功")
				})
			}
				
		})
	})
})
export const drawing_action=(flag)=>({
	type:"DRAWING_ACTION",
	flag:flag
})
