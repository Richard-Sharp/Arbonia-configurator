import React from 'react';
import style from './Header.module.css';



const Header = () => {
	return (
			<div className = {style.header}>
				<h2>Arbonia configurator </h2>
				<h5>Ver: 1.2.1 (alfa)</h5>

			</div>
	);
};

export default Header;
