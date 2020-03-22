let initialState = {
			params: {
				height: 300,
				type: 65,
			},
			specifications: {},
			quantitySections: 6
		};


export const MainParamsReducer = (state = initialState, action) => {
	switch (action.type) {
			// case SET_LOGIN_STATUS:
			// 	return {...state, status: action.status};

		default:
			return state;
	}
}

export default MainParamsReducer;