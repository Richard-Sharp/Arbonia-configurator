import React from 'react';
import style from './Specifications.module.css';


const Specifications = (props) => {
	return (
			<div className={style.container}>
				<p>Технические характеристики</p>
				<div>
					<span>Высота прибора: </span>
					<span>
						{props.height}
					</span>
				</div>

				<div>
					<span>Тип прибора: </span>
					<span>
						{props.type}
					</span>
				</div>

				<div>
					<span>Количество секций: </span>
					<span>
						{props.quantitySections}
					</span>
				</div>

	<div>
					<span>Длина прибора: </span>
					<span>
						{props.quantitySections*45 + 24}
					</span>
				</div>


			</div>
	);
}

export default Specifications;