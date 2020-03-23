import {connect} from "react-redux";
import React from "react";
import Params from "./Params";
import {setQuantitySections, setRadiatorsHeight, setRadiatorsType} from "../../../Redux/Reducers/MainParamsReducer";


class ParamsContainer extends React.Component {

	// componentDidMount() {
	// }

	// componentDidUpdate(prevProps) {
	// 	// if(prevProps.userId !== this.props.userId) {
	// 	// 	this.props.updateDialogs(this.props.userId);
	// 	// 	this.props.getNewMessagesCount();
	// 	// }
	// }


	render() {

		return <Params {...this.props} />
	}
}

let mapState = (state) => ({
	quantitySections: state.mainParams.quantitySections
})

export default connect(mapState, {setRadiatorsHeight, setRadiatorsType, setQuantitySections})(ParamsContainer);