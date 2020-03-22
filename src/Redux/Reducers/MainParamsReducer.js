


let initialState = {
	mainParams: {
		height: null,
		type: 65,
		quantitySections: 4
	},
	specifications: {}
};

export const MainParamsReducer = (state = initialState, action) => {
	switch(action.type) {
		// case SET_LOGIN_STATUS:
		// 	return {...state, status: action.status};

		default:
			return state;
	}
}

export default MainParamsReducer;