import React from 'react';
import style from './Configurator.module.css';
import CodeConfiguratorContainer from "./CodeConfigurator/CodeConfiguratorContainer";
import CodeDescriptionContainer from "./CodeDescription/CodeDescriptionContainer";
import TotalPriceContainer from "./TotalPrice/TotalPriceContainer";


//Компонент для расчета и отображения артикула прибора и его описания:
const Configurator = (props) => {
	return <div className={style.container}>
		<TotalPriceContainer/>
		<CodeConfiguratorContainer/>
		<CodeDescriptionContainer/>



	</div>
}

export default Configurator;