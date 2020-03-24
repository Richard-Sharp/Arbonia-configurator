import React from 'react';
import style from './ExtraOptions.module.css';
import ArboniaRRN from "./RRN/ArboniaRRN";
import ArboniaRRV from "./RRV/ArboniaRRV";


//Компонент для настройки дополнительных параметров прибора:
const ExtraOptions = (props) => {
	return <div className={style.container}>
		<h3>Исполнение (наличие встроенного вентиля):</h3>
		<div>
			<ArboniaRRN />
			<ArboniaRRV />
		</div>

	</div>
}

export default ExtraOptions;