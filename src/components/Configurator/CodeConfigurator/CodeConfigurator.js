import React from 'react';
import style from './CodeConfigurator.module.css';

//Компонент для отображения артикула прибора:
const CodeConfigurator = ({arboniaModel, quantitySections, valve, connectionType, connectionSize, airCooler, airCoolerLocation, airCoolerSize, drain}) => {


	let article = `${valve.model} ${arboniaModel}${!valve.valveExistence ? '' : 'V'} ${quantitySections}/${valve.code}/${connectionType.code}/${connectionSize.code}/${airCooler.code}/${airCoolerLocation.code}/${airCoolerSize.code}/${drain.code} AF`;

	let name = `Радиатор Arbonia ${arboniaModel}${valve.model === 'RRV' ? 'V' : ''} ${quantitySections}/${valve.code}/${connectionType.code}/${connectionSize.code}/${airCooler.code}/${airCoolerLocation.code}/${airCoolerSize.code}/${drain.code} AF`;

	return <div className={style.container}>

		<div className={style.article}>
			<p>Артикул:</p>
			<input type="text" value={article}/>
		</div>

		<div className={style.name}>
			<p>Наименование: </p>
			<input type="text" value={name}/>
		</div>
	</div>
};

export default CodeConfigurator;