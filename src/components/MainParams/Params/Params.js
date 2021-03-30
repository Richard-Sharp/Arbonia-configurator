import React from 'react';
import style from './Params.module.css';


const Params = ({onChangeParamHeight, onChangeParamType, onChangeQuantitySections, ...props}) => {


	return (
			<div className={style.container}>
				<h3>Основные параметры прибора</h3>
				<div className={style.height}>
					<p>Выберите высоту прибора:</p>
					<select name="height" id="heightParam"
									// required ref={heightRef}
									onChange={(e) => {
										onChangeParamHeight(e)
									}}>
						<option value="0" selected disabled>Выберите высоту...</option>
						{props.heightParamsDisplay.map(height => {
							return <option key={height.value} value={height.value}>{height.description} мм</option>
						})}
					</select>
				</div>

				<div className={style.type}>
					<p>Выберите тип радиатора:</p>
					<div>
						{props.typeParamsDisplay.map(type => {
							return <div className={style.radio_btn} key={type.value}>
								<input name='type' type="radio" value={type.value}
											 id={'type-' + type.value}
											 onChange={(e) => {
												 onChangeParamType(e)
											 }}/>
								<label htmlFor={'type-' + type.value}><img src={type.image} alt={type.description}/></label>
							</div>
						})}
					</div>
				</div>

				<div className={style.quantity}>
					<p>Выберите количество секций:</p>
					<input onChange={(e) => {onChangeQuantitySections(e)}}
								 // ref={quantityRef}
								defaultValue="0" id="sectionQuantity"
								 type="number" name="sectionQuantity"
								 min={props.specifications.minLength
										 ? props.specifications.minLength
										 : 4}
								 max={props.specifications.maxLength
										 ? props.specifications.maxLength
										 : 66}
								 step="1"/>
				</div>
			</div>
	);
};

export default Params;