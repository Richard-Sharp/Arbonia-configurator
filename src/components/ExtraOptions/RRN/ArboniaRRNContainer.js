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
		// const {code, image, description} = this.props.extraOptionRRNDisplay[0].airCoolerLocation;
		// const {value, price} = this.props.extraOptionRRNDisplay[0].connectionSize[0];
		// const descriptionConnectionSize = this.props.extraOptionRRNDisplay[0].connectionSize[0].description;

		this.props.setConnectionSizeOptions(this.props.extraOptionRRNDisplay[0].connectionSize);
		// this.props.setAirCoolerLocation(code, image, description);
		// this.props.setConnectionSize(value, price, descriptionConnectionSize);

	}

	setExtraOptions = (e) => {
		const {setConnectionSizeOptions, setAirCoolerLocation} = this.props;

		const elemIndex = e.currentTarget.id;
		const name = e.currentTarget.name;
		const price = +e.currentTarget.dataset.price;
		const valueData = +e.currentTarget.value;
		const descriptionData = e.currentTarget.dataset.description;

		const {value, image, description} = this.props.extraOptionRRNDisplay[elemIndex].airCoolerLocation;

		// console.log(this.props.extraOptionRRNDisplay[elemIndex]);


		switch (name) {
			case 'connectionType':
				this.props.setConnectionType(valueData, price, descriptionData);
				setConnectionSizeOptions(this.props.extraOptionRRNDisplay[elemIndex].connectionSize);
				setAirCoolerLocation(value, image, description);
				break;
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
	setConnectionSizeOptions
})(ArboniaRRNContainer);