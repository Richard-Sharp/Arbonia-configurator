import React from 'react';
import style from './Configurator.module.css';
import CodeConfiguratorContainer from "./CodeConfigurator/CodeConfiguratorContainer";
import CodeDescriptionContainer from "./CodeDescription/CodeDescriptionContainer";
import TotalPriceContainer from "./TotalPrice/TotalPriceContainer";


//Компонент для расчета и отображения артикула прибора и его описания:
const Configurator = (props) => {
	return <div className={style.container}>

		<div className={style.code}>
			<CodeConfiguratorContainer/>

		</div>
		<div className={style.description}>
			<CodeDescriptionContainer/>

		</div>
		<div className={style.price}>
			<TotalPriceContainer/>

		</div>

	</div>
}

export default Configurator;