import React from 'react';
import style from './TotalPrice.module.css';

//Компонент для отображения итоговой стоимости прибора:
const TotalPrice = ({totalPrice, onChangeTatalPrice}) => {

	return <div className={style.container}>
		<h3>Цена за прибор:</h3>
		<div>
			{totalPrice.toFixed(2)} EUR
			{/*<div>*/}
				{/*<button onClick={onChangeTatalPrice}>Рассчитать!</button>*/}
			{/*</div>*/}
		</div>


	</div>
}

export default TotalPrice;