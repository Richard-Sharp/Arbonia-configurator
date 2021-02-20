import React from 'react';
import style from './SizesImage.module.css';
import {connect} from "react-redux";
import {setSizesImage} from "../../../Redux/Reducers/ExtraOptionsReducer";


class SizesImageContainer extends React.Component {
	componentDidMount() {
		this.props.setSizesImage(12);
	}
	componentDidUpdate(prevProps) {
		//Формирование кода модели прибора:
		if (prevProps.params !== this.props.params) {

		}
	}

	render() {
		return <SizesImage {...this.props} />
	}
}

const SizesImage = (props) => {
	return (
			<div className={style.container}>
				{props.specifications.modelCode &&
				<div className={style.wrap_image}>
					<img src={props.sizesImage} alt="размеры прибора"/>
				</div>
				}
			</div>
	);
}


let mapState = (state) => ({
	sizesImage: state.extraOptions.sizesImage,
	specifications: state.mainParams.specifications,
})

export default connect(mapState, {setSizesImage})(SizesImageContainer);