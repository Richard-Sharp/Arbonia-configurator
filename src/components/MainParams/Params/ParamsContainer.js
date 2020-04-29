import {connect} from "react-redux";
import React from "react";
import Params from "./Params";
import {setQuantitySections, setRadiatorsHeight, setRadiatorsType, setTotalLenght} from "../../../Redux/Reducers/MainParamsReducer";


class ParamsContainer extends React.Component {

	// componentDidMount() {
	// }

	componentDidUpdate(prevProps) {
		if(prevProps.quantitySections !== this.props.quantitySections) {
			this.props.setTotalLenght(this.props.quantitySections * 45 + 24);
		}
	}


	render() {

		return <Params {...this.props} />
	}
}

let mapState = (state) => ({
	quantitySections: state.mainParams.quantitySections,
	heightParamsDisplay: state.mainParams.heightParamsDisplay,
	typeParamsDisplay: state.mainParams.typeParamsDisplay

})

export default connect(mapState, {setRadiatorsHeight, setRadiatorsType, setQuantitySections, setTotalLenght})(ParamsContainer);