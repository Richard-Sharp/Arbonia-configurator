import React from 'react';
import style from './Main.module.css';
import Params from "./Params/Params";
import Specifications from "./ParamInfo/ParamInfo";



const MainParams = () => {
	return (
			<div className = {style.main}>
				<Params />
				<Specifications />

			</div>
	);
}

export default MainParams;
