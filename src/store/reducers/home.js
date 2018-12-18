const defaultState={
	
}
export default (state=defaultState,action)=>{
	let newState=JSON.parse(JSON.stringify(state))
	switch(action.type){
		case "ONE_DATA":newState.oneData=action.value;return newState
	}
	return state
}