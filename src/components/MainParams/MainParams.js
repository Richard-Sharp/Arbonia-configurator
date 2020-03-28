import React from 'react';
import style from './Main.module.css';
import SpecificationsContainer from "./Specifications/SpecificationsContainer";
import ParamsContainer from "./Params/ParamsContainer";
import OptionsDevChangeContainer from "../ExtraOptions/OptionsDevChange/OptionsDevChangeContainer";



const MainParams = () => {
	return (
			<div className = {style.main}>
				<ParamsContainer />
				<SpecificationsContainer />
				<OptionsDevChangeContainer />
			</div>
	);
}

export default MainParams;
