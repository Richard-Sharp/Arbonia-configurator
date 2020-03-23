import {connect} from "react-redux";
import Specifications from "./Specifications";
import React from "react";



class SpecificationsContainer extends React.Component {

	// componentDidMount() {
	// }
	//
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

		return <Specifications {...this.props} />
	}
}

let mapState = (state) => ({
	height: state.mainParams.params.height,
	type: state.mainParams.params.typeParam,
	quantitySections: state.mainParams.quantitySections

})

export default connect (mapState, null)(SpecificationsContainer);
