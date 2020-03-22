import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {MainParamsReducer} from "./Reducers/MainParamsReducer";

let reducers = combineReducers({
	mainParams: MainParamsReducer
});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window._store_ = store;


export default store;