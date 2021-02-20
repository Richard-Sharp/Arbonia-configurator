import React from 'react';
import style from './Header.module.css';
import headerImg from '../../images/header-2.png';



const Header = () => {
	return (
			<div className = {style.container}>
				<div className={style.wrapper}>
					<img src={headerImg} alt="header"/>
				</div>
			</div>
	);
};

export default Header;
