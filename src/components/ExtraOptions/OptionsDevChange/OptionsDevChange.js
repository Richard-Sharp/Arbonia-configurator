import React from 'react';
import style from './OptionsDevChange.module.css';


const OptionsDevChange = (props) => {
	return (
			<div className={style.container}>
				<h4>Выбранные параметры</h4>
				<div>
					<span>[5] Наличие термостатического вентиля: </span>
					<div>
						<strong>{props.valve.description}</strong>;
						<strong> Код заказа: </strong>{props.valve.code};
						<strong> Цена: </strong>{props.valve.price} EUR;
					</div>
				</div>

				<div>
					<span>[6] Схема подключения: </span>
					<div>
						<strong>Код заказа: </strong>{props.connectionType.code};
						<strong> Цена: </strong>{props.connectionType.price} EUR;
					</div>
				</div>

				<div>
					<span>[7] Размер подключения:</span>
					<div>
						<strong>Код заказа: </strong>{props.connectionSize.code};
						<strong> Цена: </strong>{props.connectionSize.price} EUR;
					</div>
				</div>

				<div>
					<span>[8] Исполнение развоздушника: </span>
					<div>
						<strong>Код заказа: </strong>{props.airCooler.code};
						<strong> Цена: </strong>{props.airCooler.price} EUR;
					</div>
				</div>

				<div>
					<span>[9] Расположение развоздушника: </span>
					<div>
						<strong>Код заказа: </strong>{props.airCoolerLocation.code};
						<strong> Цена: </strong>{props.airCoolerLocation.price} EUR;
					</div>
				</div>

				<div>
					<span>[10] Присоединительные размеры развоздушника: </span>
					<div>
						<strong>Код заказа: </strong>{props.airCoolerSize.code};
						<strong> Цена: </strong>{props.airCoolerSize.price} EUR;
					</div>
				</div>

				<div>
					<span>[11] Слив: </span>
					<div>
						<strong>Код заказа: </strong>{props.drain.code};
						<strong> Цена: </strong>{props.drain.price} EUR;
					</div>
				</div>

				<div>
					<span>[14] Исполнение по давлению: </span>
					<div>
						<strong>Код заказа: </strong>{props.pressure.code};
						<strong> Цена: </strong>{props.pressure.price} EUR;
					</div>
				</div>


			</div>
	);
}

export default OptionsDevChange;