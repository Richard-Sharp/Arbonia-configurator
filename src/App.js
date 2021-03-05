import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainParams from "./components/MainParams/MainParams";
import ExtraOptions from "./components/ExtraOptions/ExtraOptions";
import Footer from "./components/Footer/Footer";


function App() {
	return (
			<div className="App">
				<Header />
				<MainParams />
				<ExtraOptions />
				<Footer />
			</div>
	);
}

export default App;
