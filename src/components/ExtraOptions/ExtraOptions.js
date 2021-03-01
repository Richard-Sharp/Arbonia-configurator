import React, {useState, useEffect} from 'react';
import style from './ExtraOptions.module.css';
import {Route} from "react-router";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import ArboniaRRNContainer from "./RRN/ArboniaRRNContainer";
import ArboniaRRVContainer from "./RRV/ArboniaRRVContainer";
import Configurator from "../Configurator/Configurator";


//Компонент для настройки дополнительных параметров прибора:
const ExtraOptions = (props) => {
	const { specifications, quantitySections, connectionTypeOptions } = props;


	const [configuratorMode, setConfiguratorMode] = useState(0);
	const [btnDisable, setBtnDisable] = useState(true);
	useEffect(() => {
		if (specifications.modelCode && quantitySections && connectionTypeOptions.value) {
			setBtnDisable(false);
		} else {
			setBtnDisable(true);
		}
	})
	const onShowConfigurator = () => {
		setConfiguratorMode(1);
	}

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

		<div className="btn_block">
			<button onClick={onShowConfigurator} disabled={btnDisable}>Рассчитать</button>
		</div>

		{configuratorMode === 1 &&
		<div className="configurator_block">
			<Configurator />
		</div>
		}

	</div>
}

let mapState = (state) => ({
	connectionTypeOptions: state.extraOptions.connectionTypeOptions,
	quantitySections: state.mainParams.quantitySections,
	specifications: state.mainParams.specifications,

});

export default connect(mapState, null)(ExtraOptions);