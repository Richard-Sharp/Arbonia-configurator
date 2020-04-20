import React from 'react';
import style from './TotalPrice.module.css';

//Компонент для отображения итоговой стоимости прибора:
const TotalPrice = ({arboniaModelPrice, quantitySections, valve, connectionType, connectionSize, airCooler, pressure, drain}) => {


	let totalPrice = (arboniaModelPrice * quantitySections) + valve.price + connectionType.price + connectionSize.price + airCooler.price + pressure.price + drain.price;


	return <div className={style.container}>
		<h3>Цена за прибор:</h3>
		<div>
			{totalPrice} EUR
		</div>


	</div>
}

export default TotalPrice;