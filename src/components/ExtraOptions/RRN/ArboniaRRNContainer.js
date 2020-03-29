import React from 'react';
import ArboniaRRN from "./ArboniaRRN";
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


class ArboniaRRNContainer extends React.Component {

	componentWillMount() {
		this.props.setValveType(false, 2, 0, 'RRN');
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

		return <ArboniaRRN {...this.props} />
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

export default connect(mapState, {setValveType, setConnectionType, setConnectionSize, setAirCoolerType, setAirCoolerLocation, setAirCoolerSize, setPressure, setDrain}) (ArboniaRRNContainer);