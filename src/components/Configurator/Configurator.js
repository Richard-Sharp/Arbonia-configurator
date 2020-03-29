import React from 'react';
import style from './Configurator.module.css';
import CodeConfiguratorContainer from "./CodeConfigurator/CodeConfiguratorContainer";


//Компонент для расчета и отображения артикула прибора и его описания:
const Configurator = (props) => {
	return <div className={style.container}>
		<CodeConfiguratorContainer />
		<h3>Блок с описанием</h3>
		<h3>Итоговая цена</h3>

	</div>
}

export default Configurator;