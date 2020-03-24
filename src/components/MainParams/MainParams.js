import React from 'react';
import style from './Main.module.css';
import SpecificationsContainer from "./Specifications/SpecificationsContainer";
import ParamsContainer from "./Params/ParamsContainer";



const MainParams = () => {
	return (
			<div className = {style.main}>
				<ParamsContainer />
				<SpecificationsContainer />
			</div>
	);
}

export default MainParams;
