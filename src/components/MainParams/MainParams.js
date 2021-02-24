import React from 'react';
import style from './Main.module.css';
import SpecificationsContainer from "./Specifications/SpecificationsContainer";
import ParamsContainer from "./Params/ParamsContainer";


const MainParams = () => {
	return (
			<div className = {style.main}>
				<div className = {style.header}>
					<strong>Стандартные трубчатые радиаторы</strong>
				</div>

				<div className = {style.container}>
					<ParamsContainer />
					<SpecificationsContainer />
				</div>

			</div>
	);
}

export default MainParams;
