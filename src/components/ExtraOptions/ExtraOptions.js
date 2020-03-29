import React from 'react';
import style from './ExtraOptions.module.css';
import {Route} from "react-router";
import {NavLink} from "react-router-dom";
import ArboniaRRNContainer from "./RRN/ArboniaRRNContainer";
import ArboniaRRVContainer from "./RRV/ArboniaRRVContainer";


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
			<Route exact path='/withoutVentil' render={() => <ArboniaRRNContainer/>}/>
			<Route exact path='/withVentil' render={() => <ArboniaRRVContainer/>}/>

		</div>

	</div>
}

export default ExtraOptions;