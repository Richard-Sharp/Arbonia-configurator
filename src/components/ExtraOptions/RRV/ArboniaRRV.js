import React from 'react';
import style from './ArboniaRRV.module.css';

//Компонент для настройки вентильного исполнения:
const ArboniaRRV = (props) => {
	let drain = React.createRef();
	let onChangeDrain = () => {
		let d;
		let price
		if (!drain.current.checked) {
			d = drain.current.value;
			price = 0;
		} else {
			d = 4;
			price = 100;
		}
		props.setDrain(d, price);
	}

	return <div className={style.container}>
		<h4>Со встроенным термостатическим вентилем (RRV):</h4>
		<div>
			<p> [5] Расположение вентиля:</p>
			<div>
				<input onChange={(e) => {
					props.setExtraOptions(e)
				}}
							 data-price="127.62"
							 data-description="со встроенным вентилем вверху"
							 name="valveType" type="radio" value="31"/>Стандарнтный вентиль с подключением сбоку вверху (M30x1,5);
				<input onChange={(e) => {
					props.setExtraOptions(e)
				}}
							 data-price="179.34"
							 data-description="со встроенным вентилем внизу"
							 name="valveType" type="radio" value="61"/>Стандарнтный вентиль с подключением сбоку внизу (M30x1,5);
			</div>
		</div>

		<div>
			<p> [6] Схема подключения:</p>
			<div>
				<input onChange={(e) => {
					props.setExtraOptions(e)
				}}
							 data-price="0"
							 data-description="снизу слева"
							 name="connectionType" type="radio" value="69"/>69;
				<input onChange={(e) => {
					props.setExtraOptions(e)
				}}
							 data-price="0"
							 data-description="снизу справа"
							 name="connectionType" type="radio" value="89"/>89;
				<input onChange={(e) => {
					props.setExtraOptions(e)
				}}
							 data-price="59.03"
							 data-description="снизу по центру"
							 name="connectionType" type="radio" value="96"/>96;
				<input onChange={(e) => {
					props.setExtraOptions(e)
				}}
							 data-price="59.03"
							 data-description="снизу по центру"
							 name="connectionType" type="radio" value="98"/>98;
			</div>
		</div>

		<div>
			<p>[7] Диаметр подключения:</p>
			<div>
				<input onChange={(e) => {
					props.setExtraOptions(e)
				}}
							 data-price="0"
							 data-description='1/2" внутренняя резьба'
							 name="connectionSize" type="radio" value="12"/>1/2" - ВР;
				<input onChange={(e) => {
					props.setExtraOptions(e)
				}}
							 data-price="9.56"
							 data-description='3/4" наружная резьба'
							 name="connectionSize" type="radio" value="84"/>3/4" - НР;
			</div>
		</div>

		<div>
			<p>[8] Исполнение развоздушника:</p>
			<div>
				<input onChange={(e) => {
					props.setExtraOptions(e)
				}} data-price="5.12"
							 name="airСooler" type="radio" value="1" defaultChecked/>Встроенная заглушка с поворотным выпуском
				воздуха;
				<input onChange={(e) => {
					props.setExtraOptions(e)
				}} data-price="0"
							 name="airСooler" type="radio" value="4"/>Только подключение;
				<input onChange={(e) => {
					props.setExtraOptions(e)
				}} data-price="0"
							 name="airСooler" type="radio" value="3"/>Без выпуска воздуха (!при крайней необходимости);
			</div>
		</div>

		<div>
			<p>[9] Расположение развоздушника:</p>
			<div>
				!Согласно схеме подключения!
			</div>
		</div>

		<div>
			<p>[10] Присоединительные размеры развоздушника:</p>
			<div>
				<input onChange={(e) => {
					props.setExtraOptions(e)
				}} name="airСoolerSize" type="radio" value="38"/>Внутренняя резьба G 3/8";
				<input onChange={(e) => {
					props.setExtraOptions(e)
				}} name="airСoolerSize" type="radio" value="12" defaultChecked/>Внутренняя резьба G 1/2";
			</div>
		</div>

		<div>
			<p>[11] Слив:</p>
			<input onChange={onChangeDrain} name="drain" ref={drain} type="checkbox" defaultChecked={false} value='3/0/0'/>Наличие слива (дренажа);
		</div>

		<div>
			<p>[14] Исполнение по давлению:</p>
			<div>
				<input onChange={(e) => {
					props.setExtraOptions(e)
				}} data-price="0"
							 data-description="10 бар"
							 name="pressure" type="radio" value="10" defaultChecked/>Стандартное исполнение: 10 бар (1000 кПа);
				<input onChange={(e) => {
					props.setExtraOptions(e)
				}} data-price="300"
							 data-description="16 бар (спец. исполнение)"
							 name="pressure" type="radio" value="16"/>Исполнение для высокого давления: 16 бар (1600 кПа);
			</div>
		</div>

	</div>
}

export default ArboniaRRV;