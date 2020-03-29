import {connect} from "react-redux";
import Specifications from "./Specifications";
import React from "react";
import {setArboniaModel} from "../../../Redux/Reducers/MainParamsReducer";


class SpecificationsContainer extends React.Component {

	// componentDidMount() {
	// }

	componentDidUpdate(prevProps) {
		if (prevProps.params !== this.props.params) {
			this.props.setArboniaModel(this.props.type.code + this.props.height.code);
		}
	}

	// componentWillUnmount() {
	// }


	render() {

		return <Specifications {...this.props} />
	}
}

let mapState = (state) => ({
	params: state.mainParams.params,
	arboniaModel: state.mainParams.arboniaModel,
	height: state.mainParams.params.height,
	type: state.mainParams.params.typeParam,
	quantitySections: state.mainParams.quantitySections

})

export default connect(mapState, {setArboniaModel})(SpecificationsContainer);
