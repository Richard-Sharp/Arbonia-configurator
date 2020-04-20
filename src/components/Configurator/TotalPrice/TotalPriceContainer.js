import React from 'react';
import {connect} from "react-redux";
import TotalPrice from "./TotalPrice";

class TotalPriceContainer extends React.Component {

	render() {
		return <TotalPrice {...this.props} />
	}
}

let mapState = (state) => ({
	arboniaModelPrice: state.mainParams.specifications.price,
	quantitySections: state.mainParams.quantitySections,
	valve: state.extraOptions.valve,
	connectionType: state.extraOptions.connectionType,
	connectionSize: state.extraOptions.connectionSize,
	airCooler: state.extraOptions.airCooler,
	pressure: state.extraOptions.pressure,
	drain: state.extraOptions.drain

})

export default connect(mapState, null)(TotalPriceContainer);