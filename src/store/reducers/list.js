const defaultState = {
    showdata:{}
}
export default (state=defaultState,action)=>{
    switch(action.type){
        case "GG_Data_FULFILLED":
        let GG_newdata = JSON.parse(JSON.stringify(state));
        GG_newdata.showdata = action.payload;
        return GG_newdata
    }
    return state   
}