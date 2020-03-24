import React from 'react';
import style from './Params.module.css';

const Params = (props) => {
	let heightRef = React.createRef();
	let quantityRef = React.createRef();

	let onChangeParamHeight = () => {
			props.setRadiatorsHeight(heightRef.current.value);
	}
	let onChangeParamType = (e) => {
			props.setRadiatorsType(e.currentTarget.value);
	}
	let onChangeQuantitySections = () => {
			props.setQuantitySections(quantityRef.current.value);
	}



	return (
			<div className = {style.container}>
				<h5>Основные параметры прибора</h5>
				<div className={style.height}>
					<p>Высота прибора:</p>
					<select name="height" id="heightParam" required
									ref={heightRef}
									onChange={onChangeParamHeight}>
						<option value="0" selected disabled>Выберите высоту:</option>
						<option value="300">300 мм</option>
						<option value="500">500 мм</option>
						<option value="600">600 мм</option>
						<option value="1000">1000 мм</option>
						<option value="1500">1500 мм</option>
						<option value="1800">1800 мм</option>
						<option value="2000">2000 мм</option>
					</select>
				</div>

				<div className={style.type}>
					<p>Тип радиатора</p>
					<div >
					<input onChange={(e) => {onChangeParamType(e)}} name="type" type="radio" value="65" />2-трубчатый;
					<input onChange={(e) => {onChangeParamType(e)}} name="type" type="radio" value="105" />3-трубчатый;
					<input onChange={(e) => {onChangeParamType(e)}} name="type" type="radio" value="145"/>4-трубчатый;
					<input onChange={(e) => {onChangeParamType(e)}} name="type" type="radio" value="185"/>5-трубчатый;
					</div>
				</div>

				<div className={style.quantity}>
					<p>Количество секций:</p>
					<input onChange={onChangeQuantitySections} ref={quantityRef} defaultValue={props.quantitySections} type="number" name="sectionQuantity" min="4" max="60" step="1"/>
				</div>
			</div>
	);
}

export default Params;