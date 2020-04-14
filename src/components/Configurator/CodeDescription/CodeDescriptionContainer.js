import React from 'react';
import {connect} from "react-redux";
import CodeDescription from "./CodeDescription";


class CodeDescriptionContainer extends React.Component {
	render() {
		return <CodeDescription {...this.props} />
	}
}

let mapState = (state) => ({
	arboniaModel: state.mainParams.specifications.modelCode,
	height: state.mainParams.params.height,
	type: state.mainParams.params.typeParam,
	quantitySections: state.mainParams.quantitySections,
	totalLenght: state.mainParams.totalLenght,
	totalPower: state.mainParams.totalPower,
	valve: state.extraOptions.valve,
	connectionType: state.extraOptions.connectionType,
	connectionSize: state.extraOptions.connectionSize,
	airCooler: state.extraOptions.airCooler,
	airCoolerLocation: state.extraOptions.airCoolerLocation,
	airCoolerSize: state.extraOptions.airCoolerSize,
	pressure: state.extraOptions.pressure,
	drain: state.extraOptions.drain

})

export default connect(mapState, null)(CodeDescriptionContainer);