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

	setExtraOptions = (e) => {
		const name = e.currentTarget.name;
		const value = e.currentTarget.value;
		const price = e.currentTarget.dataset.price;
		const description = e.currentTarget.dataset.description;
		switch (name) {
			case 'connectionType':
				this.props.setConnectionType(value, price, description);
				break;
			case 'connectionSize':
				this.props.setConnectionSize(value, price, description);
				break;
			case 'airСooler':
				this.props.setAirCoolerType(value, price);
				break;
			case 'airСoolerLocation':
				this.props.setAirCoolerLocation(value, price);
				break;
			case 'airСoolerSize':
				this.props.setAirCoolerSize(value, price);
				break;
			case 'pressure':
				this.props.setPressure(value, price);
				break;
			default:
				return (
						alert('some error')
				)
		}
	}

	render() {

		return <ArboniaRRN {...this.props} setExtraOptions={this.setExtraOptions}/>
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

export default connect(mapState, {
	setValveType,
	setConnectionType,
	setConnectionSize,
	setAirCoolerType,
	setAirCoolerLocation,
	setAirCoolerSize,
	setPressure,
	setDrain
})(ArboniaRRNContainer);