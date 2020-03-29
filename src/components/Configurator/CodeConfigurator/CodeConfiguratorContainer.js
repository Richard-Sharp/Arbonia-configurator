import React from 'react';
import {connect} from "react-redux";
import CodeConfigurator from "./CodeConfigurator";


class CodeConfiguratorContainer extends React.Component {

	// componentWillMount() {
	// }

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

		return <CodeConfigurator {...this.props} />
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

export default connect(mapState, null) (CodeConfiguratorContainer);