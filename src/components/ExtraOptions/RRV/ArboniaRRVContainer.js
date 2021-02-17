import React from 'react';
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
import ArboniaRRV from "./ArboniaRRV";


class ArboniaRRVContainer extends React.PureComponent {

	setConnectionTypeDefault = (option) => {
		const {value, dataPrice, dataDescription} = option;
		this.props.setConnectionType(value, +dataPrice, dataDescription);
	}
	setConnectionSizeDefault = (option) => {
		const {value, price, description} = option;
		this.props.setConnectionSize(value, +price, description);
	}

	setAirCoolerLocationDefault = (option) => {
		const {value, image, description} = option;
		this.props.setAirCoolerLocation(value, image, description);
	}

	componentWillMount() {
		this.props.setValveType(true, 31, 127.62, 'RRV', 'со встроенным вентилем ', 'Стандарнтный вентиль с подключением сбоку вверху (M30x1,5)');
	}

	componentDidMount() {
		this.props.setConnectionSizeOptions(this.props.extraOptionRRVDisplay[0].connectionSize);
		this.setConnectionTypeDefault(this.props.extraOptionRRVDisplay[0]);
		this.setConnectionSizeDefault(this.props.extraOptionRRVDisplay[0].connectionSize[0]);
		this.setAirCoolerLocationDefault(this.props.extraOptionRRVDisplay[0].airCoolerLocation);
	}

	setConnectionTypesData = (e, {options, value}) => {
		const {setConnectionSizeOptions, setAirCoolerLocation} = this.props;
		let data = options.filter(el => el.value === value);
		console.log(data[0]);
		const {price, text, connectionSize, airCoolerLocation} = data[0];
		const {valveExistence, valveValue, valvePrice, model, valveDescription, valveText} = data[0].valveTypeData;
		this.props.setConnectionTypeOptions(data[0]);
		this.props.setConnectionType(value, +price, text);
		setConnectionSizeOptions(connectionSize);
		setAirCoolerLocation(airCoolerLocation.value, airCoolerLocation.image, airCoolerLocation.description);
		this.props.setValveType(valveExistence, valveValue, valvePrice, model, valveDescription, valveText);
		console.log('connectionTypeOptions', this.props.connectionTypeOptions);
	};


	setExtraOptions = (e) => {
		const elemIndex = e.currentTarget.id || 0;

		const name = e.currentTarget.name;
		const priceData = +e.currentTarget.dataset.price;
		const valueData = +e.currentTarget.value;
		const descriptionData = e.currentTarget.dataset.description;
		const airValue = e.currentTarget.dataset.airValue;
		const airImage = e.currentTarget.dataset.airImage;
		const airDescriotion = e.currentTarget.dataset.airDescriotion;

		const {valveExistence, value, price, model, description, text} = this.props.extraOptionRRVDisplay[elemIndex].valveTypeData;
		console.log("## elem click connectionType: ", this.props.extraOptionRRVDisplay[elemIndex]);

		switch (name) {
			case 'connectionType':
				this.props.setConnectionType(valueData, priceData, descriptionData);
				setConnectionSizeOptions(this.props.extraOptionRRVDisplay[elemIndex].connectionSize);
				setAirCoolerLocation(airValue, airImage, airDescriotion);
				this.props.setValveType(valveExistence, value, price, model, description, text);
				break;
			case 'connectionSize':
				this.props.setConnectionSize(valueData, priceData, descriptionData);
				break;
			case 'airСoolerSize':
				this.props.setAirCoolerSize(valueData, descriptionData);
				break;
			case 'pressure':
				this.props.setPressure(valueData, priceData, descriptionData);
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
											 setConnectionTypesData={this.setConnectionTypesData}
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
	pressure: state.extraOptions.pressure,
	extraOptionRRVDisplay: state.extraOptions.extraOptionRRVDisplay,
	connectionSizeOptions: state.extraOptions.connectionSizeOptions,
	connectionTypeOptions: state.extraOptions.connectionTypeOptions,
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
	setConnectionSizeOptions,
	setConnectionTypeOptions
})(ArboniaRRVContainer);