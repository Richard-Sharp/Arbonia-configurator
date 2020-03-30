import {getMainParamsHeightData, getMainParamsTypeData} from "../../DataBase/MainParamsData/MainParamsData";

const SET_RADIATORS_HEIGHT = 'MainParams/Params/SET_RADIATORS_HEIGHT';
const SET_RADIATORS_TYPE = 'MainParams/Params/SET_RADIATORS_TYPE';
const SET_QUANTITY_SECTIONS = 'MainParams/Params/SET_QUANTITY_SECTIONS';
const SET_ARBONIA_TYPE = 'MainParams/Params/SET_ARBONIA_TYPE';

let initialState = {
	params: {
		height: {
			value: 0,
			code: 0
		},
		typeParam: {
			value: 0,
			code: 0
		},
	},
	arboniaModel: 0,
	specifications: {},
	quantitySections: 4
};


export const MainParamsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_RADIATORS_HEIGHT:
			return {
				...state,
				params: {
					...state.params,
					height: {
						...state.params.height,
						value: action.value, code: action.code
					}
				}
			}
		case SET_RADIATORS_TYPE:
			return {
				...state,
				params: {
					...state.params,
					typeParam: {
						...state.params.typeParam,
						value: action.value, code: action.code
					}
				}
			}
		case SET_QUANTITY_SECTIONS:
			return {
				...state,
				quantitySections: action.number
			}
		case SET_ARBONIA_TYPE:
			return {
				...state,
				arboniaModel: action.arboniaModel
			}

		default:
			return state;
	}
}

//Action creators:
export const setRadiatorsHeightSuccess = (value, code) => ({type: SET_RADIATORS_HEIGHT, value: value, code: code});
export const setRadiatorsTypeSuccess = (value, code) => ({type: SET_RADIATORS_TYPE, value: value, code: code});
export const setQuantitySections = (number) => ({type: SET_QUANTITY_SECTIONS, number});
export const setArboniaModel = (arboniaModel) => ({type: SET_ARBONIA_TYPE, arboniaModel});


//Thunk creators:
export const setRadiatorsHeight = (value) => async (dispatch) => {
	let heightValue = await getMainParamsHeightData(value);
	dispatch(setRadiatorsHeightSuccess(heightValue.value, heightValue.code));
};
export const setRadiatorsType = (value) => async (dispatch) => {
	let typeValue = await getMainParamsTypeData(value);
	dispatch(setRadiatorsTypeSuccess(typeValue.value, typeValue.code));
};

export default MainParamsReducer;