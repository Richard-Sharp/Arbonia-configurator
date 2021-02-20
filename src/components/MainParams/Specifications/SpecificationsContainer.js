import {connect} from "react-redux";
import Specifications from "./Specifications";
import React from "react";
import {setSpecificationsData, setTotalPower} from "../../../Redux/Reducers/MainParamsReducer";


class SpecificationsContainer extends React.Component {
	componentDidUpdate(prevProps) {
		//Формирование кода модели прибора:
		if (prevProps.params !== this.props.params) {
			this.props.setSpecificationsData(this.props.type.code, this.props.height.code);
		};
		//Проверка на получение данных по коду модели прибора, расчет общей мощности прибора:
		if (prevProps.specifications.modelCode !== this.props.specifications.modelCode || prevProps.quantitySections !== this.props.quantitySections ) {
			if(this.props.specifications.power) {
				let setTotalPower = this.props.specifications.power.pw50 * this.props.quantitySections;
				this.props.setTotalPower(setTotalPower);
			} else {
				this.props.setTotalPower(0);
			}
		}
	}

	render() {
		return <Specifications {...this.props} />
	}
}

let mapState = (state) => ({
	params: state.mainParams.params,
	arboniaModel: state.mainParams.arboniaModel,
	height: state.mainParams.params.height,
	type: state.mainParams.params.typeParam,
	quantitySections: state.mainParams.quantitySections,
	totalLenght: state.mainParams.totalLenght,
	totalPower: state.mainParams.totalPower,
	specifications: state.mainParams.specifications,
	sizesImage: state.extraOptions.sizesImage,
})

export default connect(mapState, {setSpecificationsData, setTotalPower})(SpecificationsContainer);
