import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainParams from "./components/MainParams/MainParams";
import ExtraOptions from "./components/ExtraOptions/ExtraOptions";


function App() {
	return (
			<div className="App">
				<Header />
				<MainParams />
				<ExtraOptions />
			</div>
	);
}

export default App;
