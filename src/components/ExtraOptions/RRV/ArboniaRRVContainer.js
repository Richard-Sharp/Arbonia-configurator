import React from 'react';
import {
	setConnectionType,
	setConnectionSize,
	setAirCoolerType,
	setAirCoolerLocation,
	setAirCoolerSize,
	setPressure,
	setDrain, setValveType
} from "../../../Redux/Reducers/ExtraOptionsReducer";
import {connect} from "react-redux";
import ArboniaRRV from "./ArboniaRRV";


class ArboniaRRVContainer extends React.Component {

	componentWillMount() {
		this.props.setValveType(true, 31, 127.19);
	}

	// componentDidUpdate(prevProps) {
	// 	// if(prevProps.userId !== this.props.userId) {
	// 	// 	this.props.updateDialogs(this.props.userId);
	// 	// 	this.props.getNewMessagesCount();
	// 	// }
	// }
	//
	// componentWillUnmount() {
	// }

	render() {

		return <ArboniaRRV {...this.props} />
	}
}

let mapState = (state) => ({
	valve: state.extraOptions.valve,
	connectionType: state.extraOptions.connectionType,
	connectionSize: state.extraOptions.connectionSize,
	airCooler: state.extraOptions.airCooler,
	airCoolerLocation: state.extraOptions.airCoolerLocation,
	airCoolerSize: state.extraOptions.airCoolerSize,
	drain: state.extraOptions.drain,
	pressure: state.extraOptions.pressure

})

export default connect(mapState, {setValveType, setConnectionType, setConnectionSize, setAirCoolerType, setAirCoolerLocation, setAirCoolerSize, setPressure, setDrain}) (ArboniaRRVContainer);