import React from 'react';
import style from './CodeDescription.module.css';

//Компонент для отображения описания прибора:
const CodeDescription = ({arboniaModel, height, type, quantitySections, valve, connectionType, connectionSize, airCooler, airCoolerLocation, airCoolerSize, pressure, totalLenght, totalPower}) => {
debugger

	let description = `Радиатор Arbonia ${arboniaModel}${!valve.valveExistence ? '' : 'V'}  ${type.code}-трубчатый глубиной - ${type.value} мм, высотой - ${height.value} мм. Количество секций - ${quantitySections}, общей длиной - ${totalLenght} мм, подключение ${connectionType.description} с диаметром ${connectionSize.description}, рабочее давление: ${pressure.description}. Общая мощность прибора при dT50 = ${totalPower} Вт.` ;


	return <div className={style.container}>
		<h3>Описание прибора:</h3>
		<div>
			<textarea name="codeDescription" cols="60" rows="5" value={description}/>
		</div>


	</div>
}

export default CodeDescription;