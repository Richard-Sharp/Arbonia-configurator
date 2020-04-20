import React from 'react';
import {connect} from "react-redux";
import TotalPrice from "./TotalPrice";
import {setTotalPrice} from "../../../Redux/Reducers/MainParamsReducer";

class TotalPriceContainer extends React.Component {
	componentDidUpdate(prevProps) {
		if(prevProps !== this.props) {
			let totalPrice = (this.props.arboniaModelPrice * this.props.quantitySections) + this.props.valve.price + this.props.connectionType.price + this.props.connectionSize.price + this.props.airCooler.price + this.props.pressure.price + this.props.drain.price;
			this.props.setTotalPrice(totalPrice);
		}
	}
	// onChangeTotalPrice = () => {
// 	let totalPrice = (this.props.arboniaModelPrice * this.props.quantitySections) + this.props.valve.price + this.props.connectionType.price + this.props.connectionSize.price + this.props.airCooler.price + this.props.pressure.price + this.props.drain.price;
	// 	this.props.setTotalPrice(totalPrice);
	// }

	render() {
		return <TotalPrice totalPrice={this.props.totalPrice} />
		// onChangeTatalPrice={this.onChangeTotalPrice}
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
	drain: state.extraOptions.drain,
	totalPrice: state.mainParams.totalPrice,

})

export default connect(mapState, {setTotalPrice})(TotalPriceContainer);