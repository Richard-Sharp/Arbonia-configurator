import React from 'react';
import style from './Main.module.css';
import SpecificationsContainer from "./Specifications/SpecificationsContainer";
import ParamsContainer from "./Params/ParamsContainer";
import SizesImage from "./SizesImageBlock/SizesImage";






const MainParams = () => {
	return (
			<div className = {style.main}>
				<ParamsContainer />
				<SpecificationsContainer />
				<SizesImage/>
			</div>
	);
}

export default MainParams;
