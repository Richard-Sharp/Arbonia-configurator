import React from 'react';
import style from './ArboniaRRV.module.css';

//Компонент для настройки вентильного исполнения:
const ArboniaRRV = (props) => {

	return <div className={style.container}>
		<h4>Со встроенным термостатическим вентилем (RRV):</h4>
		<div>
			<p> [5] Расположение вентиля:</p>
			<div>
				<input onChange={(e) => {props.setExtraOptions(e)}}
							 data-price="127.62"
							 data-description="вверху"
							 name="valveType" type="radio" value="31"/>Стандарнтный вентиль с подключением вверху (M30x1,5);
				<input onChange={(e) => {props.setExtraOptions(e)}}
							 data-price="179.34"
							 data-description="вверху"
							 name="valveType" type="radio" value="31"/>Стандарнтный вентиль с подключением вверху (M30x1,5);

			</div>


		</div>


	</div>
}

export default ArboniaRRV;