import React from 'react';
import style from './CodeDescription.module.css';

//Компонент для отображения описания прибора:
const CodeDescription = ({arboniaModel, quantitySections, valve, connectionType, connectionSize, airCooler, airCoolerLocation, airCoolerSize, drain}) => {
debugger

	let description = `${valve.model} ${arboniaModel}${valve.model === 'RRV' ? 'V' : ''} ${quantitySections}/${valve.code}/${connectionType.code}/${connectionSize.code}/${airCooler.code}/${airCoolerLocation.code}/${airCoolerSize.code}/${drain.code} AF  подключение ${connectionType.description} с диаметром ${connectionSize.description}` ;


	return <div className={style.container}>
		<h3>Описание прибора:</h3>
		<div>
			<textarea name="codeDescription" cols="60" rows="5" value={description}/>
		</div>


	</div>
}

export default CodeDescription;