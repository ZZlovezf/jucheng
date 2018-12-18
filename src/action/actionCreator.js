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