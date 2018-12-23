const defaultState = {
    showdata: {},
    gg_city: { name: "全国", cid: -1 },
    gg_getdatatype:null
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case "GG_Data_FULFILLED":
            let GG_newdata = JSON.parse(JSON.stringify(state));
            GG_newdata.showdata = action.payload;
            return GG_newdata;
        case "GG_CITY":
            let GG_newcity = JSON.parse(JSON.stringify(state));
            GG_newcity.gg_city = action.citylist;
            return GG_newcity;
        case "GG_newData_FULFILLED":
            let GG_newData = JSON.parse(JSON.stringify(state));
            GG_newData.showdata.data.total = action.payload.data.total;
            GG_newData.showdata.data.list = [...GG_newData.showdata.data.list,...action.payload.data.list]    
            return GG_newData;
        case "GG_GETDATATYPE":
            let GG_newCaid = JSON.parse(JSON.stringify(state));
            GG_newCaid.gg_getdatatype = action.val;
            return GG_newCaid
    }
    return state
}