const SET_CONNECTION_TYPE = 'ExtraOptions/SET_CONNECTION_TYPE';
const SET_CONNECTION_SIZE = 'ExtraOptions/SET_CONNECTION_SIZE';
const SET_AIRCOOLER_TYPE = 'ExtraOptions/SET_AIRCOOLER_TYPE';
const SET_AIRCOOLER_LOCATION = 'ExtraOptions/SET_AIRCOOLER_LOCATION';
const SET_AIRCOOLER_SIZE = 'ExtraOptions/SET_AIRCOOLER_SIZE';
const SET_PRESSURE = 'ExtraOptions/SET_PRESSURE';
const SET_DRAIN = 'ExtraOptions/SET_DRAIN';
const SET_VALVE_TYPE = 'ExtraOptions/SET_VALVE_TYPE';

let initialState = {
	valve: {
		valveExistence: false,
		code: 2,
		price: 0,
		model: null
	},
	connectionType: {
		code: 12,
		price: 0,
		description: null
	},
	connectionSize: {
		code: 12,
		price: 0,
		description: null
	},
	airCooler: {
		code: 1,
		price: 5.12
	},
	airCoolerLocation: {
		code: 1,
		price: 0
	},
	airCoolerSize: {
		code: 12,
		price: 0
	},
	drain: {
		code: '3/0/0',
		price: 0
	},
	pressure: {
		code: 10,
		price: 0,
		description: null
	}
};


export const ExtraOptionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_VALVE_TYPE:
			return {
				...state,
				valve: {...state.valve, ...action.payload}
			}

		case SET_CONNECTION_TYPE:
			return {
				...state,
				connectionType: {
					...state.connectionType,
					code: action.code,
					price: action.price,
					description: action.description
				}
			}
		case SET_CONNECTION_SIZE:
			return {
				...state,
				connectionSize: {...state.connectionSize, ...action.payload}
			}
		case SET_AIRCOOLER_TYPE:
			return {
				...state,
				airCooler: {...state.airCooler, ...action.payload}
			}
		case SET_AIRCOOLER_LOCATION:
			return {
				...state,
				airCoolerLocation: {...state.airCoolerLocation, ...action.payload}
			}
		case SET_AIRCOOLER_SIZE:
			return {
				...state,
				airCoolerSize: {...state.airCoolerSize, ...action.payload}
			}
		case SET_DRAIN:
			return {
				...state,
				drain: {...state.drain, ...action.payload}
			}
		case SET_PRESSURE:
			return {
				...state,
				pressure: {...state.pressure, ...action.payload}
			}

		default:
			return state;
	}
}

//Action creators:
export const setValveType = (valve = false, code, price = 0, model = 'RRN') => ({
	type: SET_VALVE_TYPE,
	payload: {valveExistence: valve, code: code, price: price, model: model}
});

export const setConnectionType = (code, price, description) => ({type: SET_CONNECTION_TYPE, code, price, description});

export const setConnectionSize = (code, price, description) => ({type: SET_CONNECTION_SIZE, payload: {code: code, price: price, description: description}});

export const setAirCoolerType = (code, price) => ({type: SET_AIRCOOLER_TYPE, payload: {code: code, price: price}});

export const setAirCoolerLocation = (code, price = 0) => ({
	type: SET_AIRCOOLER_LOCATION,
	payload: {code: code, price: price}
});

export const setAirCoolerSize = (code, price = 0) => ({type: SET_AIRCOOLER_SIZE, payload: {code: code, price: price}});

export const setPressure = (code, price = 0, description) => ({type: SET_PRESSURE, payload: {code: code, price: price, description: description}});

export const setDrain = (code, price = 0) => ({type: SET_DRAIN, payload: {code: code, price: price}});


export default ExtraOptionsReducer;