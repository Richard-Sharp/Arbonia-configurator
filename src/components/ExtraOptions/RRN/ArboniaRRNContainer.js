import React from 'react';
import ArboniaRRN from "./ArboniaRRN";
import {
	setConnectionType,
	setConnectionSize,
	setAirCoolerType,
	setAirCoolerLocation,
	setAirCoolerSize,
	setPressure,
	setDrain, setValveType, setConnectionSizeOptions, setConnectionTypeOptions
} from "../../../Redux/Reducers/ExtraOptionsReducer";
import {connect} from "react-redux";


class ArboniaRRNContainer extends React.Component {

	setConnectionTypeDefault = (option) => {
		const {value, dataPrice, dataDescription} = option;
		this.props.setConnectionType(value, +dataPrice, dataDescription);
	};
	setConnectionSizeDefault = (option) => {
		const {value, price, description} = option;
		this.props.setConnectionSize(value, +price, description);
	};

	setAirCoolerLocationDefault = (option) => {
		const {value, image, description} = option;
		this.props.setAirCoolerLocation(value, image, description);
	};

	componentWillMount() {
		this.props.setValveType(false, 2, 0, 'RRN', 'безвентильное исполнение');
	}

	componentDidMount() {
		this.props.setConnectionSizeOptions(this.props.extraOptionRRNDisplay[0].connectionSize);
		this.setConnectionTypeDefault(this.props.extraOptionRRNDisplay[0]);
		this.setConnectionSizeDefault(this.props.extraOptionRRNDisplay[0].connectionSize[0]);
		this.setAirCoolerLocationDefault(this.props.extraOptionRRNDisplay[0].airCoolerLocation);
		this.props.setConnectionTypeOptions([]);
	};

	setConnectionTypesData = (e, {options, value}) => {
		const {setConnectionSizeOptions, setAirCoolerLocation} = this.props;
		let data = options.filter(el => el.value === value);
		console.log(data[0]);
		const {price, text, connectionSize, airCoolerLocation} = data[0];
		this.props.setConnectionTypeOptions(data[0]);
		this.props.setConnectionType(value, +price, text);
		setConnectionSizeOptions(connectionSize);
		setAirCoolerLocation(airCoolerLocation.value, airCoolerLocation.image, airCoolerLocation.description);
		console.log('connectionTypeOptions', this.props.connectionTypeOptions);
	};

	setExtraOptions = (e) => {
		const elemIndex = e.currentTarget.id || 0;
		const name = e.currentTarget.name;
		const price = +e.currentTarget.dataset.price;
		const valueData = +e.currentTarget.value;
		const descriptionData = e.currentTarget.dataset.description;

		console.log(this.props.extraOptionRRNDisplay[elemIndex]);

		switch (name) {
			case 'connectionSize':
				this.props.setConnectionSize(valueData, price, descriptionData);
				break;
			case 'airСooler':
				this.props.setAirCoolerType(valueData, price);
				break;
			case 'airСoolerSize':
				this.props.setAirCoolerSize(valueData, price);
				break;
			case 'pressure':
				this.props.setPressure(valueData, price, descriptionData);
				break;
			default:
				return (
						alert('some error')
				)
		}
	};

	render() {

		return <ArboniaRRN {...this.props}
											 setExtraOptions={this.setExtraOptions}
											 setConnectionTypesData={this.setConnectionTypesData}/>
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
	connectionSizeOptions: state.extraOptions.connectionSizeOptions,
	connectionTypeOptions: state.extraOptions.connectionTypeOptions,

});

export default connect(mapState, {
	setValveType,
	setConnectionType,
	setConnectionSize,
	setAirCoolerType,
	setAirCoolerLocation,
	setAirCoolerSize,
	setPressure,
	setDrain,
	setConnectionSizeOptions,
	setConnectionTypeOptions
})(ArboniaRRNContainer);