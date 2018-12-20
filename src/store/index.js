import {createStore,combineReducers,applyMiddleware} from "redux";
import home from "./reducers/home";
import list from "./reducers/list"
import reduxPromiseMiddleware from "redux-promise-middleware"
const reducers=combineReducers({
	home,
	list
})
const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()))
export default store