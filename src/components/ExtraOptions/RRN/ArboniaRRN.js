import React from 'react';
import style from './ArboniaRRN.module.css';

//Компонент для настройки безвентильного исполнения:
const ArboniaRRN = (props) => {
	debugger
	let drain = React.createRef();

	let onChangeConnectionType = (e) => {
		props.setConnectionType(e.currentTarget.value, e.currentTarget.dataset.price)
	}

	let onChangeConnectionSize = (e) => {
		props.setConnectionSize(e.currentTarget.value, e.currentTarget.dataset.price)
	}

	let onChangeAirCoolerType = (e) => {
		props.setAirCoolerType(e.currentTarget.value, e.currentTarget.dataset.price);
	}

	let onChangeAirCoolerLocation = (e) => {
		props.setAirCoolerLocation(e.currentTarget.value, e.currentTarget.dataset.price);
	}

	let onChangeAirCoolerSize = (e) => {
		props.setAirCoolerSize(e.currentTarget.value, e.currentTarget.dataset.price);
	}

	let onChangePressure = (e) => {
		props.setPressure(e.currentTarget.value, e.currentTarget.dataset.price);
	}

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
		<h4>Безвентильное исполнение (RRN):</h4>
		<div>
			<p> [6] Схема подключения:</p>
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
							 data-price="10.91"
							 name="connectionType" type="radio" value="24"/>24;
				<input onChange={(e) => {
					onChangeConnectionType(e)
				}}
							 data-price="10.91"
							 name="connectionType" type="radio" value="42"/>42;
				<input onChange={(e) => {
					onChangeConnectionType(e)
				}}
							 data-price="76.84"
							 name="connectionType" type="radio" value="98"/>98;
				<input onChange={(e) => {
					onChangeConnectionType(e)
				}}
							 data-price="76.84"
							 name="connectionType" type="radio" value="96"/>96;
			</div>
		</div>

		<div>
			<p>[7] Размер подключения:</p>
			<div>
				<input onChange={(e) => {
					onChangeConnectionSize(e)
				}}
							 data-price="0" defaultChecked
							 name="connectionSize" type="radio" value="12"/>1/2" - ВР;
				<input onChange={(e) => {
					onChangeConnectionSize(e)
				}}
							 data-price="4.5"
							 name="connectionSize" type="radio" value="34"/>3/4" - ВР;
				<input onChange={(e) => {
					onChangeConnectionSize(e)
				}}
							 data-price="15"
							 name="connectionSize" type="radio" value="10"/>1" - ВР;
			</div>
		</div>

		<div>
			<p>[8] Исполнение развоздушника:</p>
			<div>
				<input onChange={(e) => {
					onChangeAirCoolerType(e)
				}} data-price="5.12"
							 name="airСooler" type="radio" value="1" defaultChecked/>Встроенная заглушка с поворотным выпуском
				воздуха;
				<input onChange={(e) => {
					onChangeAirCoolerType(e)
				}} data-price="0"
							 name="airСooler" type="radio" value="4"/>Только подключение;
				<input onChange={(e) => {
					onChangeAirCoolerType(e)
				}} data-price="0"
							 name="airСooler" type="radio" value="3"/>Без выпуска воздуха (!при крайней необходимости);
			</div>
		</div>

		<div>
			<p>[9] Расположение развоздушника:</p>
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
			<p>[10] Присоединительные размеры развоздушника:</p>
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
			<p>[11] Слив:</p>
			<input onChange={onChangeDrain} name="drain" ref={drain} type="checkbox" defaultChecked={false} value='3'/>Наличие
			слива
			(дренажа);
		</div>

		{/*<p>[12] Расположение сливного патрубка:</p>*/}
		{/*<p>[13] Присоединительный размер сливного патрубка:</p>*/}

		<div>
			<p>[14] Исполнение по давлению:</p>
			<div>
				<input onChange={(e) => {
					onChangePressure(e)
				}} data-price="10"
							 name="pressure" type="radio" value="10" defaultChecked/>Стандартное исполнение: 10 бар (1000 кПа);
				<input onChange={(e) => {
					onChangePressure(e)
				}} data-price="300"
							 name="pressure" type="radio" value="16"/>Исполнение для высокого давления: 16 бар (1600 кПа);
			</div>
		</div>

	</div>
}


export default ArboniaRRN;