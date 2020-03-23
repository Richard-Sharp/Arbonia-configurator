const SET_RADIATORS_HEIGHT = 'MainParams/Params/SET_RADIATORS_HEIGHT';
const SET_RADIATORS_TYPE = 'MainParams/Params/SET_RADIATORS_TYPE';

let initialState = {
	params: {
		height: 300,
		typeParam: 65,
	},
	specifications: {},
	quantitySections: 10
};


export const MainParamsReducer = (state = initialState, action) => {
	debugger
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

		default:
			return state;
	}
}

//Action creators:
export const setRadiatorsHeight = (height) => ({type: SET_RADIATORS_HEIGHT, height});
export const setRadiatorsType = (typeParam) => ({type: SET_RADIATORS_TYPE, typeParam});

export default MainParamsReducer;