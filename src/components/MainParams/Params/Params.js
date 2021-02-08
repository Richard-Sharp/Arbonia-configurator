import React from 'react';
import style from './Params.module.css';
import img2 from '../../../images/types/type2.png';
import img3 from '../../../images/types/type3.png';
import img4 from '../../../images/types/type4.png';

const Params = (props) => {
	let heightRef = React.createRef();
	let quantityRef = React.createRef();

	const onChangeParamHeight = () => {
		props.setRadiatorsHeight(heightRef.current.value);
	}
	const onChangeParamType = (e) => {
		props.setRadiatorsType(e.currentTarget.value, e.currentTarget.value);
	}
	const onChangeQuantitySections = () => {
		if (quantityRef.current.value < 4) {
			props.setQuantitySections(4);
		} else if (quantityRef.current.value > 60) {
			props.setQuantitySections(60);
		} else {
			props.setQuantitySections(quantityRef.current.value);
		}
	}

	return (
			<div className={style.container}>
				<h5>Основные параметры прибора</h5>
				<div className={style.height}>
					<p>Высота прибора:</p>
					<select name="height" id="heightParam" required ref={heightRef}
									onChange={(e) => {
										onChangeParamHeight(e)
									}}>
						<option value="0" selected disabled>Выберите высоту:</option>
						{props.heightParamsDisplay.map(height => {
							return <option key={height.value} value={height.value}>{height.description} мм</option>
						})}
						{/*<option value="030" >300 мм</option>*/}
					</select>
				</div>

				<div className={style.type}>
					<p>Тип радиатора:</p>
					<div>
						{props.typeParamsDisplay.map(type => {
							return <div key={type.value}>
								<input name='type' type="radio" value={type.value}
											 onChange={(e) => {
												 onChangeParamType(e)
											 }}/>{type.description};
							</div>
						})}
						{/*<input onChange={(e) => {onChangeParamType(e)}} */}
						{/*name="type" type="radio" value="2"/>2-трубчатый;*/}
					</div>
				</div>

				<div className={style.quantity}>
					<p>Количество секций:</p>
					<input onChange={onChangeQuantitySections} ref={quantityRef} defaultValue={props.quantitySections}
								 type="number" name="sectionQuantity" min="4" max="60" step="1"/>
				</div>


				<div className={style.typeContainer}>
					<div className={style.radio_btn}>
						<input id="radio-1" type="radio" name="radio" value="1"/>
						<label htmlFor="radio-1"><img src={img2} alt="type-2"/></label>
					</div>

					<div className={style.radio_btn}>
						<input id="radio-2" type="radio" name="radio" value="2"/>
						<label htmlFor="radio-2"><img src={img3} alt="type-3"/></label>
					</div>

					<div className={style.radio_btn}>
						<input id="radio-3" type="radio" name="radio" value="3"/>
						<label htmlFor="radio-3"><img src={img4} alt="type-4"/></label>
					</div>
				</div>


			</div>
	);
}

export default Params;