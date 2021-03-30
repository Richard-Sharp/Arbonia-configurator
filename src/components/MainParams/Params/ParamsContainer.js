import {connect} from "react-redux";
import React from "react";
import Params from "./Params";
import {setQuantitySections, setRadiatorsHeight, setRadiatorsType, setTotalLenght} from "../../../Redux/Reducers/MainParamsReducer";


class ParamsContainer extends React.Component {
	state = {
		quantitySectionsValidate: true
	}

	// componentDidMount() {
	//
	// }


	componentDidUpdate(prevProps) {
		if(prevProps.quantitySections !== this.props.quantitySections) {
			this.props.setTotalLenght(this.props.quantitySections * 45 + 24);
		}
		if(prevProps.params.typeParam !== this.props.params.typeParam) {
			if(this.props.quantitySections > this.props.specifications.maxLength ) {
				this.setState({
					quantitySectionsValidate: false
				})
			} else {
				this.setState({
					quantitySectionsValidate: true
				})
			}
		}
	}

	onChangeParamHeight = (e) => {
		// props.setRadiatorsHeight(heightRef.current.value);
		this.props.setRadiatorsHeight(e.currentTarget.value);
	};
	onChangeParamType = (e) => {
		this.props.setRadiatorsType(e.currentTarget.value, e.currentTarget.value);
	};
	onChangeQuantitySections = (e) => {
		const quantitySections = e.currentTarget.value;
		if (quantitySections < 4) {
			if(this.props.specifications.minLength) {
				this.props.setQuantitySections(this.props.specifications.minLength);
			} else {
				this.props.setQuantitySections(4);
			}
		} else if (quantitySections > this.props.specifications.maxLength) {
			this.props.setQuantitySections(this.props.specifications.maxLength);
		} else {
			this.props.setQuantitySections(quantitySections);
		}
	};


	render() {
		return <Params onChangeParamHeight={this.onChangeParamHeight}
									 onChangeParamType={this.onChangeParamType}
									 onChangeQuantitySections={this.onChangeQuantitySections}
									 quantitySectionsValidate={this.state.quantitySectionsValidate}
									 {...this.props} />
	}
}

let mapState = (state) => ({
	quantitySections: state.mainParams.quantitySections,
	heightParamsDisplay: state.mainParams.heightParamsDisplay,
	specifications: state.mainParams.specifications,
	params: state.mainParams.params,
	typeParamsDisplay: state.mainParams.typeParamsDisplay

});

export default connect(mapState, {setRadiatorsHeight, setRadiatorsType, setQuantitySections, setTotalLenght})(ParamsContainer);