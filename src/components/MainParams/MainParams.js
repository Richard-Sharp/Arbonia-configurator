import React from 'react';
import style from './Main.module.css';
import SpecificationsContainer from "./Specifications/SpecificationsContainer";
import ParamsContainer from "./Params/ParamsContainer";
import SizesImage from "./SizesImageBlock/SizesImage";

const MainParams = () => {
	return (
			<div className = {style.main}>
				<div className = {style.header}>
					<strong>Стандартные трубчатые радиаторы</strong>
				</div>

				<div className = {style.container}>
					<ParamsContainer />
					<SpecificationsContainer />
					<SizesImage/>
				</div>

			</div>
	);
}

export default MainParams;
