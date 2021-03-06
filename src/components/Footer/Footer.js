import React from 'react';
import style from './Footer.module.css';
import headerImg from '../../images/header-2.png';



const Footer = () => {
	return (
			<div className = {style.container}>
				<div className={style.wrapper}>
					<div className={style.img_block}>
						<img src={headerImg} alt="footer"/>
					</div>
					<div className={style.version_block}>
						<p>Ver: 1.3.1 (beta)</p>
					</div>

				<div className={style.name_block}>
					<p>© #RchSharp, 2021</p>
					<p>+375-33-352 68 67</p>

				</div>
				</div>
			</div>
	);
};

export default Footer;
