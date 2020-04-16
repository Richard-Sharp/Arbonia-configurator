import React from 'react';
import {connect} from "react-redux";
import CodeConfigurator from "./CodeConfigurator";


class CodeConfiguratorContainer extends React.Component {
	render() {
		return <CodeConfigurator {...this.props} />
	}
}

let mapState = (state) => ({
	arboniaModel: state.mainParams.specifications.modelCode,
	quantitySections: state.mainParams.quantitySections,
	valve: state.extraOptions.valve,
	connectionType: state.extraOptions.connectionType,
	connectionSize: state.extraOptions.connectionSize,
	airCooler: state.extraOptions.airCooler,
	airCoolerLocation: state.extraOptions.airCoolerLocation,
	airCoolerSize: state.extraOptions.airCoolerSize,
	drain: state.extraOptions.drain

})

export default connect(mapState, null)(CodeConfiguratorContainer);