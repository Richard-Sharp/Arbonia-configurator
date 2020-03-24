const SET_RADIATORS_HEIGHT = 'MainParams/Params/SET_RADIATORS_HEIGHT';
const SET_RADIATORS_TYPE = 'MainParams/Params/SET_RADIATORS_TYPE';
const SET_QUANTITY_SECTIONS = 'MainParams/Params/SET_QUANTITY_SECTIONS';

let initialState = {
	params: {
		height: 0,
		typeParam: 0,
	},
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
					height: action.height
				}
			}
		case SET_RADIATORS_TYPE:
			return {
				...state,
				params: {
					...state.params,
					typeParam: action.typeParam
				}
			}
		case SET_QUANTITY_SECTIONS:
			return {
				...state,
				quantitySections: action.number
			}

		default:
			return state;
	}
}

//Action creators:
export const setRadiatorsHeight = (height) => ({type: SET_RADIATORS_HEIGHT, height});
export const setRadiatorsType = (typeParam) => ({type: SET_RADIATORS_TYPE, typeParam});
export const setQuantitySections = (number) => ({type: SET_QUANTITY_SECTIONS, number});

export default MainParamsReducer;