import React from 'react';
import style from './ExtraOptions.module.css';
import ArboniaRRN from "./RRN/ArboniaRRN";
import ArboniaRRV from "./RRV/ArboniaRRV";
import {Route} from "react-router";
import {NavLink} from "react-router-dom";


//Компонент для настройки дополнительных параметров прибора:
const ExtraOptions = (props) => {
	return <div className={style.container}>
		<h3>Исполнение (наличие встроенного вентиля):</h3>
		<div className={style.sideBar}>
			<span className={style.button}>
          <NavLink to="/withoutVentil" activeClassName={style.active}>RRN</NavLink></span>
			<span className={style.button}>
					<NavLink to="/withVentil" activeClassName={style.active}>RRV</NavLink>
        </span>
		</div>

		<div>
			<Route exact path='/withoutVentil' render={() => <ArboniaRRN/>}/>
			<Route exact path='/withVentil' render={() => <ArboniaRRV/>}/>

		</div>

	</div>
}

export default ExtraOptions;