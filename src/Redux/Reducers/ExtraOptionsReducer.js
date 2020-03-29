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
		value: 2,
		price: 0
	},
	connectionType: {
		value: 12,
		price: 0
	},
	connectionSize: {
		value: 12,
		price: 0
	},
	airCooler: {
		value: 1,
		price: 5.12
	},
	airCoolerLocation: {
		value: 1,
		price: 0
	},
	airCoolerSize: {
		value: 12,
		price: 0
	},
	drain: {
		value: 12,
		price: 0
	},
	pressure: {
		value: 10,
		price: 0
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
					value: action.value, price: action.price
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
export const setValveType = (valve = false, value, price = 127.19) => ({type: SET_VALVE_TYPE, payload: {valveExistence: valve, value: value, price: price}});

export const setConnectionType = (value, price) => ({type: SET_CONNECTION_TYPE, value, price});

export const setConnectionSize = (value, price) => ({type: SET_CONNECTION_SIZE, payload: {value: value, price: price}});

export const setAirCoolerType = (value, price) => ({type: SET_AIRCOOLER_TYPE, payload: {value: value, price: price}});

export const setAirCoolerLocation = (value, price = 0) => ({type: SET_AIRCOOLER_LOCATION, payload: {value: value, price: price}});

export const setAirCoolerSize = (value, price = 0) => ({type: SET_AIRCOOLER_SIZE, payload: {value: value, price: price}});

export const setPressure = (value, price = 0) => ({type: SET_PRESSURE, payload: {value: value, price: price}});

export const setDrain = (value, price = 0) => ({type: SET_DRAIN, payload: {value: value, price: price}});


export default ExtraOptionsReducer;