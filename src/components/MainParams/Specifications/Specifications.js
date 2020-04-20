import React from 'react';
import style from './Specifications.module.css';


const Specifications = (props) => {
	return (
			<div className={style.container}>
				<h4>Технические характеристики</h4>

				<div>
					<span>Модель прибора: </span>
					<span>
						{props.specifications.modelCode}
					</span>
				</div>

				<div>
					<span>Высота прибора: </span>
					<span>
						{props.height.value} мм
					</span>
				</div>

				<div>
					<span>Глубина прибора: </span>
					<span>
						{props.type.value} мм
					</span>
				</div>

				<div>
					<span>Количество секций: </span>
					<span>
						{!props.quantitySections ? 0 : props.quantitySections} шт.
					</span>
				</div>

				<div>
					<span>Длина прибора: </span>
					<span>
						{props.quantitySections > 0 ? props.totalLenght : 0} мм
					</span>
				</div>

				<div>
					<span>Мощность прибора (dT50): </span>
					<span>
						{/*{props.totalPower} Вт*/}
						{!props.totalPower ? 0 : props.totalPower} Вт
					</span>
				</div>

			</div>
	);
}

export default Specifications;