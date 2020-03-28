import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {MainParamsReducer} from "./Reducers/MainParamsReducer";
import ExtraOptionsReducer from "./Reducers/ExtraOptionsReducer";

let reducers = combineReducers({
	mainParams: MainParamsReducer,
	extraOptions: ExtraOptionsReducer
});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window._store_ = store;


export default store;