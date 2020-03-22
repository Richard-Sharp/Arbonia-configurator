import React from 'react';
import style from './Main.module.css';
import Params from "./Params/Params";
import SpecificationsContainer from "./ParamInfo/SpecificationsContainer";



const MainParams = () => {
	return (
			<div className = {style.main}>
				<Params />
				<SpecificationsContainer />

			</div>
	);
}

export default MainParams;
