import React from 'react';
import ArboniaRRN from "./ArboniaRRN";
import {
	setConnectionType,
	setConnectionSize,
	setAirCoolerType,
	setAirCoolerLocation,
	setAirCoolerSize,
	setPressure,
	setDrain, setValveType, setConnectionSizeOptions
} from "../../../Redux/Reducers/ExtraOptionsReducer";
import {connect} from "react-redux";


class ArboniaRRNContainer extends React.Component {

	componentWillMount() {
		this.props.setValveType(false, 2, 0, 'RRN', 'безвентильное исполнение');
	}

	componentDidMount() {
		this.props.setConnectionSizeOptions(this.props.extraOptionRRNDisplay[0].connectionSize)
		const {code, image, description} = this.props.extraOptionRRNDisplay[0].airCoolerLocation;
		this.props.setAirCoolerLocation(code, image, description);
	}

	setExtraOptions = (e) => {
		const {setConnectionSizeOptions} = this.props;


		const name = e.currentTarget.name;
		const value = +e.currentTarget.value;
		const elemIndex = e.currentTarget.id;

		const price = +e.currentTarget.dataset.price;
		const description = e.currentTarget.dataset.description;
		// const airCooler = e.currentTarget.dataset.air;
		console.log(this.props.extraOptionRRNDisplay[elemIndex]);
		const {airCode, airImage, airDescription} = this.props.extraOptionRRNDisplay[elemIndex].airCoolerLocation;

		switch (name) {
			case 'connectionType':
				this.props.setConnectionType(value, price, description);
				setConnectionSizeOptions(this.props.extraOptionRRNDisplay[elemIndex].connectionSize);
				// this.props.setAirCoolerLocation(airCode, airImage, airDescription);
				break;
			case 'connectionSize':
				this.props.setConnectionSize(value, price, description);
				break;
			case 'airСooler':
				this.props.setAirCoolerType(value, price);
				break;
			// case 'airСoolerLocation':
			// 	this.props.setAirCoolerLocation(value, price);
			// 	break;
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
	pressure: state.extraOptions.pressure,
	extraOptionRRNDisplay: state.extraOptions.extraOptionRRNDisplay,
	connectionSizeOptions: state.extraOptions.connectionSizeOptions

})

export default connect(mapState, {
	setValveType,
	setConnectionType,
	setConnectionSize,
	setAirCoolerType,
	setAirCoolerLocation,
	setAirCoolerSize,
	setPressure,
	setDrain,
	setConnectionSizeOptions
})(ArboniaRRNContainer);