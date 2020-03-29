import React from 'react';
import style from './CodeConfigurator.module.css';

//Компонент для отображения артикула прибора:
const CodeConfigurator = (props) => {

	let article = `${props.valve.model} ${props.arboniaModel} ${props.quantitySections}/${props.valve.code}/${props.connectionType.code}`

	return <div className={style.container}>
		<h3>Артикул прибора:</h3>

		<input type="text" value={article}/>


	</div>
}

export default CodeConfigurator;