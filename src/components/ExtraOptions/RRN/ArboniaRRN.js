import React from 'react';
import style from './ArboniaRRN.module.css';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

//Компонент для настройки безвентильного исполнения:
const ArboniaRRN = (props) => {
	let drain = React.createRef();

	const onChangeDrain = () => {
		let d;
		let price;
		if (!drain.current.checked) {
			d = drain.current.value;
			price = 0;
		} else {
			d = 4;
			price = 100;
		}
		props.setDrain(d, price);
	};

	// const defaultOption = friendOptions[0].value;
	const {image} = props.connectionTypeOptions;
	console.log('###', props.connectionTypeOptions);

	return <div className={style.container}>
		<h4>Безвентильное исполнение (RRN):</h4>
		<div>
			<p> [6] Схема подключения:</p>

			{/*<div className={style.select}>*/}
				{/*<button className={style.select_btn}>Open select</button>*/}
				{/*<div id="myDropdown" className={style.select_content}>*/}
					{/*<a href="#">Link 1</a>*/}
					{/*<a href="#">Link 2</a>*/}
					{/*<a href="#">Link 3</a>*/}
				{/*</div>*/}
			{/*</div>*/}
			<div className={style.test_div}>
				<Dropdown
						onChange={props.setConnectionTypesData}
						placeholder='Выберите тип подключение: '
						fluid={true}
						selection
						item
						options={props.extraOptionRRNDisplay}
						upward={false}
				/>
			</div>

			<div>
				{props.connectionTypeOptions.image &&
				<div className={style.connection_img}>
					<img src={image.src} alt="тип подключения"/>
				</div>}

				{props.connectionTypeOptions.image &&
				<div className={style.cooler_img}>
					<p>[9] Расположение развоздушника:</p>
					<img src={props.airCoolerLocation.image} alt={props.airCoolerLocation.description}/>
				</div>}
			</div>
		</div>

		<div>
			<p>[7] Диаметр подключения:</p>
				{props.connectionSizeOptions.map(el => {
					return <>
						<input onChange={(e) => {props.setExtraOptions(e)}}
									 data-price={el.price} defaultChecked={el.defaultChecked}
									 data-description={el.description}
									 name={el.name} type="radio" value={el.value}/>{el.text}
					</>
				})}
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
				<div className={style.cooler_img}>
					<img src={props.airCoolerLocation.image} alt={props.airCoolerLocation.description}/>
				</div>
				<div>
					{props.airCoolerLocation.description}
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
			<input onChange={onChangeDrain} name="drain" ref={drain} type="checkbox" defaultChecked={false} value='3/0/0'/>Наличие
			слива
			(дренажа);
		</div>

		{/*<p>[12] Расположение сливного патрубка:</p>*/}
		{/*<p>[13] Присоединительный размер сливного патрубка:</p>*/}

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
};

export default ArboniaRRN;