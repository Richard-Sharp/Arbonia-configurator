import React from 'react';
import style from './Configurator.module.css';
import CodeConfiguratorContainer from "./CodeConfigurator/CodeConfiguratorContainer";
import CodeDescriptionContainer from "./CodeDescription/CodeDescriptionContainer";


//Компонент для расчета и отображения артикула прибора и его описания:
const Configurator = (props) => {
	return <div className={style.container}>
		<CodeConfiguratorContainer/>
		<CodeDescriptionContainer/>
		<h3>Итоговая цена</h3>

	</div>
}

export default Configurator;