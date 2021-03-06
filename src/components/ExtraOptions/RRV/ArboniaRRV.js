import React from 'react';
import style from './ArboniaRRV.module.css';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import SizesImage from "../SizesImageBlock/SizesImage";

//Компонент для настройки вентильного исполнения:
const ArboniaRRV = (props) => {
	const drain = React.createRef();

	const onChangeDrain = () => {
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
	const {image} = props.connectionTypeOptions;

	return <div className={style.container}>

		<h3>Со встроенным термостатическим вентилем (RRV):</h3>

		<div className={style.main}>

			<div className={style.connection_block}>
				<p> [6] Схема подключения:</p>
				<div className={style.dropdown}>
					<Dropdown
							onChange={props.setConnectionTypesData}
							placeholder='Выберите тип подключение: '
							fluid={true}
							selection
							item
							options={props.extraOptionRRVDisplay}
							upward={false}
					/>
				</div>

				{props.connectionTypeOptions.image &&
				<div className={style.connection_wrapper}>
					<div className={style.connection_img}>
						<img src={image.src} alt="тип подключения"/>
					</div>
					<div className={style.valve_description}>
						{props.valve.text}
					</div>

					<div className={style.connection_size_block}>
						<p>[7] Диаметр подключения:</p>
						{props.connectionSizeOptions.map(el => {
							return <div>
								<input onChange={(e) => {props.setExtraOptions(e)}}
											 data-price={el.price}
											 defaultChecked={el.defaultChecked}
											 data-description={el.description}
											 name={el.name} type="radio"
											 value={el.value}/> - {el.text}
							</div>
						})}
					</div>
				</div>}
			</div>

			<div className={style.air_location_wrapper}>
				{props.connectionTypeOptions.image &&
				<div className={style.air_location_block}>
					<p>[9] Расположение развоздушника:</p>
					<div className={style.cooler_img}>
						<img src={props.airCoolerLocation.image}
								 alt={props.airCoolerLocation.description}/>
					</div>
					<div>
						{props.airCoolerLocation.description}
					</div>
				</div>}
			</div>

			{props.sizesImage &&
			<div className={style.size_image_wrapper}>
				<SizesImage />
			</div>}
		</div>





		<div className={style.additional}>
			<div className={style.aircooler_block}>
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

			<div className={style.air_connection_block}>
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

			<div className={style.drain_block}>
				<p>[11] Слив:</p>
				<input onChange={onChangeDrain} name="drain" ref={drain} type="checkbox" defaultChecked={false} value='3/0/0'/>Наличие
				слива
				(дренажа);
			</div>

			{/*<p>[12] Расположение сливного патрубка:</p>*/}
			{/*<p>[13] Присоединительный размер сливного патрубка:</p>*/}

			<div className={style.pressure_block}>
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


	</div>
}

export default ArboniaRRV;