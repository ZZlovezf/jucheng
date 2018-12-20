const qs = require("querystring");
export const get_one_action=(dispatch)=>{
	dispatch({
		type:"ONE_DATA",
		payload:new Promise(resolve=>{
			fetch("/index/hotsShowList").then(res => {
				return res.json()
			}).then(json => {
				resolve(json)
			})
		})
	})
}
export const GG_showdata=(dispatch,obj)=>{
	dispatch({
		type:"GG_Data",
		payload:new Promise(resolve=>{
			fetch("/Show/getShowList",{
				method:"post",
				headers:{
					'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
				},
				body:qs.stringify(obj)
			}).then(res=>res.json())
			.then(data=>{
				resolve(data)				
			})
		})
	})
}