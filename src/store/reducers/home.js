const defaultState={
	oneData:{
		code:1,
		data:[]
	}
}
export default (state=defaultState,action)=>{
	let newState=JSON.parse(JSON.stringify(state))
	switch(action.type){
		case "ONE_DATA_FULFILLED":newState.oneData=action.payload;return newState
	}
	return state
}