import React from 'react';
import style from './CodeDescription.module.css';

//Компонент для отображения описания прибора:
const CodeDescription = ({arboniaModel, height, type, quantitySections, valve, connectionType, connectionSize, airCooler, airCoolerLocation, airCoolerSize, pressure, totalLenght, totalPower}) => {


	let description = `Радиатор Arbonia ${arboniaModel}${!valve.valveExistence ? '' : 'V'}  ${type.code}-трубчатый, ${valve.description}, глубиной - ${type.value} мм, высотой - ${height.value} мм. Количество секций - ${quantitySections}, общей длиной - ${totalLenght} мм, подключение ${connectionType.description} с диаметром ${connectionSize.description}, ${airCoolerLocation.description}, рабочее давление: ${pressure.description}. Общая мощность прибора при dT50 = ${totalPower} Вт. Цвет: белый (RAL 9016).`;

	return <div className={style.container}>
		<p>Описание прибора:</p>
		<div className={style.description}>
			<textarea name="codeDescription" cols="65" rows="7" value={description}/>
		</div>
	</div>
};

export default CodeDescription;