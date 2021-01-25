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
		this.props.setValveType(true, 31, 127.62, 'RRV', 'со встроенным вентилем ');
	}
	setExtraOptions = (e) => {
		const name = e.currentTarget.name;
		const value = +e.currentTarget.value;
		const price = +e.currentTarget.dataset.price;
		const description = e.currentTarget.dataset.description;
		switch (name) {
			case 'valveType':
				this.props.setValveType(true, value, price, 'RRV', description);
				break;
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
				this.props.setPressure(value, price, description);
				break;
			default:
				return (
						alert('some error')
				)
		}
	}

	render() {

		return <ArboniaRRV {...this.props}
											 setExtraOptions={this.setExtraOptions}
											 setValveType={this.props.setValveType}/>
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
})(ArboniaRRVContainer);