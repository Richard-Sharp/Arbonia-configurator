import React from 'react';
import style from './Header.module.css';



const Header = () => {
	return (
			<div className = {style.header}>
				<h2>Arbonia configurator </h2>
				<h5>Ver: 1.0.1</h5>

			</div>
	);
}

export default Header;
