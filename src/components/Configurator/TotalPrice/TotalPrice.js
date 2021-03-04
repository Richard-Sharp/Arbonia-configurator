import React from 'react';
import style from './TotalPrice.module.css';

//Компонент для отображения итоговой стоимости прибора:
const TotalPrice = ({totalPrice}) => {

	return <div className={style.container}>
		<p>Цена за прибор:</p>
		<div className={style.price}>
			{(totalPrice*1.07).toFixed(2)} EUR
		</div>


	</div>
};

export default TotalPrice;