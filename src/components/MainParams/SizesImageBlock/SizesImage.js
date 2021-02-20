import React from 'react';
import style from './SizesImage.module.css';
import {connect} from "react-redux";


class SizesImageContainer extends React.Component {
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
				<div className={style.wrap_image}>
					<img src={props.sizesImage} alt="размеры прибора"/>
				</div>

			</div>
	);
}


let mapState = (state) => ({
	sizesImage: state.extraOptions.sizesImage,
})

export default connect(mapState, null)(SizesImageContainer);