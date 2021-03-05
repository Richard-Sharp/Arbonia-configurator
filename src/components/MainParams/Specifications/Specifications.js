import React from 'react';
import style from './Specifications.module.css';
import image from '../../../images/types/typeSize2-2.png'
import TotalPriceContainer from "../../Configurator/TotalPrice/TotalPriceContainer";


const Specifications = (props) => {
	return (
			<div className={style.container}>

				<div className={style.wrapper}>
					<h3>Технические характеристики</h3>
					<div className={style.specification}>
						<div className={style.item}>
							<span>Модель прибора: </span>
							<div className={style.item_option}>
								{props.specifications.modelCode
										? props.specifications.modelCode
										: " .... "}
							</div>
						</div>

						<div className={style.item}>
							<span>Высота прибора [H]: </span>
							<div className={style.item_option}>
								{props.height.value} мм
							</div>
						</div>

						<div className={style.item}>
							<span>Глубина прибора [T]: </span>
							<div className={style.item_option}>
								{props.type.value} мм
							</div>
						</div>

						<div className={style.item}>
							<span>Глубина от центра [T1]: </span>
							<div className={style.item_option}>
								{props.type.value / 2} мм
							</div>
						</div>

						<div className={style.item}>
							<span>Длина прибора [L]: </span>
							<div className={style.item_option}>
								{props.quantitySections > 0 ? props.totalLenght : 0} мм
							</div>
						</div>

						<div className={style.item}>
							<span>Количество секций [GL]: </span>
							<div className={style.item_option}>
								{props.quantitySections} шт.
							</div>
						</div>

						<div className={style.item_pw}>
							<span>Мощность прибора (<b>ΔT50</b>/ ΔT60/ ΔT70): </span>
							<div className={style.item_option_pw}>
								<b>{props.totalPower}</b>/ {props.totalPower}/ {props.totalPower} Вт
							</div>
						</div>
					</div>
				</div>

				<div className={style.image_wrapper}>

					{props.type.image &&
					<img src={props.type.image} alt="size image"/>
					}


					{props.showPrice &&
					<div className={style.price}>
						<TotalPriceContainer/>
					</div>}

				</div>

			</div>
	);
}

export default Specifications;