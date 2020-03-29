import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainParams from "./components/MainParams/MainParams";
import ExtraOptions from "./components/ExtraOptions/ExtraOptions";
import Configurator from "./components/Configurator/Configurator";

function App() {
	return (
			<div className="App">
				<Header />
				<MainParams />
				<ExtraOptions />
				<Configurator />
			</div>
	);
}

export default App;
