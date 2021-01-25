import {
	getMainParamsHeightData,
	getMainParamsTypeData,
	heightParamsData,
	typeParamsData
} from "../../DataBase/MainParamsData/MainParamsData";
import {getArboniaModelData} from "../../DataBase/SpecificationsData/SpecificationsData";
import {connectionTypeRRNData} from "../../DataBase/ExtraOptionsData/ExtraOptionsData";

const SET_RADIATORS_HEIGHT = 'MainParams/Params/SET_RADIATORS_HEIGHT';
const SET_RADIATORS_TYPE = 'MainParams/Params/SET_RADIATORS_TYPE';
const SET_QUANTITY_SECTIONS = 'MainParams/Params/SET_QUANTITY_SECTIONS';
const SET_ARBONIA_TYPE = 'MainParams/Params/SET_ARBONIA_TYPE';
const SET_TOTAL_LENGHT = 'MainParams/Params/SET_TOTAL_LENGHT';
const SET_TOTAL_POWER = 'MainParams/Params/SET_TOTAL_POWER';
const SET_TOTAL_PRICE = 'MainParams/Params/SET_TOTAL_PRICE';
const SET_SPECIFICATION_DATA = 'MainParams/Params/SET_SPECIFICATION_DATA';

let initialState = {
	params: {
		height: {
			value: 0,
			code: 0
		},
		typeParam: {
			value: 0, // - 65
			code: 0 // - 2
		},
	},
	heightParamsDisplay: heightParamsData,
	typeParamsDisplay: typeParamsData,
	specifications: {},
	quantitySections: null,
	totalPower: null,
	totalLenght: 0,
	totalPrice: 0
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
		case SET_TOTAL_LENGHT:
			return {
				...state,
				totalLenght: action.lenght
			}
		case SET_TOTAL_POWER:
			return {
				...state,
				totalPower: action.power
			}
		case SET_TOTAL_PRICE:
			return {
				...state,
				totalPrice: action.price
			}

		case SET_SPECIFICATION_DATA:
			return {
				...state,
				specifications: {
					...state.specifications, ...action.specifications
				}
			}

		default:
			return state;
	}
}

//Action creators:
export const setRadiatorsHeightSuccess = (value, code) => ({type: SET_RADIATORS_HEIGHT, value: value, code: code});
export const setRadiatorsTypeSuccess = (value, code) => ({type: SET_RADIATORS_TYPE, value: value, code: code});
export const setQuantitySections = (number = 4) => ({type: SET_QUANTITY_SECTIONS, number});
export const setTotalLenght = (lenght) => ({type: SET_TOTAL_LENGHT, lenght});
export const setTotalPower = (power = 0) => ({type: SET_TOTAL_POWER, power});
export const setTotalPrice = (price = 0) => ({type: SET_TOTAL_PRICE, price});

export const setArboniaModelSuccess = (arboniaModel) => ({type: SET_ARBONIA_TYPE, arboniaModel});
export const setSpecificationsDataSuccess = (specifications) => ({type: SET_SPECIFICATION_DATA, specifications});


//Thunk creators:
//Устанавливаем высоту прибора:
export const setRadiatorsHeight = (value) => async (dispatch) => {
	let heightValue = await getMainParamsHeightData(value); // - запрашиваем данные по высоте
	dispatch(setRadiatorsHeightSuccess(heightValue.value, heightValue.code));
};

//Устанавливаем тип прибора:
export const setRadiatorsType = (value) => async (dispatch) => {
	let typeValue = await getMainParamsTypeData(value); // - Запрашиваем данные по типу
	dispatch(setRadiatorsTypeSuccess(typeValue.value, typeValue.code));
};

//Запрашиваем данные по конкретной модели прибора:
export const setSpecificationsData = (type, height) => async (dispatch) => {
	if (type !== 0 && height !== 0) {
		const specifications = await getArboniaModelData(type + height); // - arboniaModel (e.g.: 2180)
		dispatch(setSpecificationsDataSuccess(specifications));
	}
};

export default MainParamsReducer;