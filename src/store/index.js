import {createStore,combineReducers,applyMiddleware} from "redux"
import home from "./reducers/home"
import reduxPromiseMiddleware from "redux-promise-middleware"
const reducers=combineReducers({
	home
})
const store=createStore(reducers,applyMiddleware(reduxPromiseMiddleware()))
export default store