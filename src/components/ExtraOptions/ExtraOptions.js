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
	const [displayBtn, setDisplayBtn] = useState(1);
	const [btnDisable, setBtnDisable] = useState(true);
	const [componentValveType, setComponentValveType] = useState(null);
	useEffect(() => {
		if (specifications.modelCode && quantitySections && connectionTypeOptions.value) {
			setBtnDisable(false);
		} else {
			setBtnDisable(true);
		}
	}, [specifications, quantitySections, connectionTypeOptions]);
	const onShowConfigurator = () => {
		setDisplayBtn(0);
		setConfiguratorMode(1);

	}

	return <div className={style.container}>

		<div className={style.sideBar_wrapper}>
			<h3>Исполнение (наличие встроенного вентиля):</h3>


			<div className={style.sideBar}>
					<button className={componentValveType === 'RRN'
							? style.button_active
							: style.button}
							onClick={() => setComponentValveType('RRN')}>RRN</button>
					<button className={componentValveType === 'RRV'
							? style.button_active
							: style.button}
							onClick={() => setComponentValveType('RRV')}>RRV</button>
			</div>
		</div>
		{componentValveType === 'RRN' &&
		<ArboniaRRNContainer/>
		}

		{componentValveType === 'RRV' &&
		<ArboniaRRVContainer/>
		}


{/*/!*Реализация отображения компонентов с помощью Route. Некорректно работает с gh-pages*!/*/}
		{/*<div className={style.sideBar_wrapper}>*/}
			{/*<h3>Исполнение (наличие встроенного вентиля):</h3>*/}

			{/*<div className={style.sideBar}>*/}
				{/*<NavLink to="/withoutVentil" activeClassName={style.active}>*/}
					{/*<div className={style.button}>RRN</div>*/}
				{/*</NavLink>*/}

				{/*<NavLink to="/withVentil" activeClassName={style.active}>*/}
					{/*<div className={style.button}>RRV</div>*/}
				{/*</NavLink>*/}
			{/*</div>*/}
		{/*</div>*/}

		<div className={style.extra_option_block}>
			<Route exact path='/withoutVentil' render={() => <ArboniaRRNContainer/>}/>
			<Route exact path='/withVentil' render={() => <ArboniaRRVContainer/>}/>
		</div>

		{displayBtn === 1 &&
		<div className={style.btn_block}>
			<button onClick={onShowConfigurator} disabled={btnDisable}>Рассчитать</button>
		</div>}

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