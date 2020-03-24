import React from 'react';
import style from './ArboniaRRN.module.css';

//Компонент для настройки безвентильного исполнения:
const ArboniaRRN = (props) => {
	let drain = React.createRef();

	let onChangeConnectionType = (e) => {
		// alert(e.currentTarget.value + e.currentTarget.dataset.price);
		// alert(e.currentTarget.dataset.price)
	}

	let onChangeConnectionSize = (e) => {
		// alert(e.currentTarget.value + e.currentTarget.dataset.price);
	}

	let onChangeAirCoolerType = (e) => {
		// alert(e.currentTarget.value);
	}

	let onChangeAirCoolerLocation = (e) => {
		// alert(e.currentTarget.value);
	}

	let onChangeAirCoolerSize = (e) => {
		// alert(e.currentTarget.value);
	}

	let onChangeDrain = () => {
		let d;
		if (!drain.current.checked) {
			d = drain.current.value;
		} else {
			d = 4;
		}
		// alert(drain.current.checked);
		// alert(drain.current.value);
		alert(d);
	}
	return <div className={style.container}>
		<h4>Безвентильное исполнение (RRN):</h4>
		<div>
			<p>Схема подключения:</p>
			<div>
				<input onChange={(e) => {
					onChangeConnectionType(e)
				}}
							 data-price="0" defaultChecked
							 name="connectionType" type="radio" value="12"/>12;
				<input onChange={(e) => {
					onChangeConnectionType(e)
				}}
							 data-price="0"
							 name="connectionType" type="radio" value="34"/>34;
				<input onChange={(e) => {
					onChangeConnectionType(e)
				}}
							 data-price="10,91"
							 name="connectionType" type="radio" value="24"/>24;
				<input onChange={(e) => {
					onChangeConnectionType(e)
				}}
							 data-price="10,91"
							 name="connectionType" type="radio" value="42"/>42;
				<input onChange={(e) => {
					onChangeConnectionType(e)
				}}
							 data-price="76,84"
							 name="connectionType" type="radio" value="98"/>98;
				<input onChange={(e) => {
					onChangeConnectionType(e)
				}}
							 data-price="76,84"
							 name="connectionType" type="radio" value="96"/>96;
			</div>
		</div>

		<div>
			<p>Размер подключения:</p>
			<div>
				<input onChange={(e) => {
					onChangeConnectionSize(e)
				}}
							 data-price="0" defaultChecked
							 name="connectionSize" type="radio" value="12"/>1/2" - ВР;
				<input onChange={(e) => {
					onChangeConnectionSize(e)
				}}
							 data-price="4,5"
							 name="connectionSize" type="radio" value="34"/>3/4" - ВР;
				<input onChange={(e) => {
					onChangeConnectionSize(e)
				}}
							 data-price="15"
							 name="connectionSize" type="radio" value="10"/>1" - ВР;
			</div>
		</div>

		<div>
			<p>Исполнение развоздушника:</p>
			<div>
				<input onChange={(e) => {
					onChangeAirCoolerType(e)
				}} name="airСooler" type="radio" value="1" defaultChecked/>Встроенная заглушка с поворотным выпуском воздуха;
				<input onChange={(e) => {
					onChangeAirCoolerType(e)
				}} name="airСooler" type="radio" value="4"/>Только подключение;
				<input onChange={(e) => {
					onChangeAirCoolerType(e)
				}} name="airСooler" type="radio" value="3"/>Без выпуска воздуха (!при крайней необходимости);
			</div>
		</div>

		<div>
			<p>Расположение развоздушника:</p>
			<div>
				<input onChange={(e) => {
					onChangeAirCoolerLocation(e)
				}} name="airСoolerLocation" type="radio" value="1" defaultChecked/>1; <input onChange={(e) => {
				onChangeAirCoolerLocation(e)
			}} name="airСoolerLocation" type="radio" value="3"/>3;
				<input onChange={(e) => {
					onChangeAirCoolerLocation(e)
				}} name="airСoolerLocation" type="radio" value="5"/>5;
				<input onChange={(e) => {
					onChangeAirCoolerLocation(e)
				}} name="airСoolerLocation" type="radio" value="7"/>7;

			</div>
		</div>

		<div>
			<p>Присоединительные размеры развоздушника:</p>
			<div>
				<input onChange={(e) => {
					onChangeAirCoolerSize(e)
				}} name="airСoolerSize" type="radio" value="38"/>Внутренняя резьба G 3/8";
				<input onChange={(e) => {
					onChangeAirCoolerSize(e)
				}} name="airСoolerSize" type="radio" value="12" defaultChecked/>Внутренняя резьба G 1/2";

			</div>
		</div>

		<div>
			<input onChange={onChangeDrain} ref={drain} type="checkbox" defaultChecked={false} value='3'/>Наличие слива (дренажа)
		</div>

	</div>
}

export default ArboniaRRN;