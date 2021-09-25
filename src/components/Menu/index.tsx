import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../images/logo.svg';
import hamburger from '../../images/hamburger.svg';

import './style.scss';

const Menu = () => {
	const [isActive, setIsActive] = useState(false);
	const history = useHistory<History>();

	const handleMenu = () => {
		setIsActive(!isActive);
	};

	const backToMainMenu = () => {
		history.push('/');
	};

	return (
		<>
			<div className="menu">
				<img
					src={logo}
					alt="logo"
					onClick={() => backToMainMenu()}
					className="logo"
				/>
				<img
					src={hamburger}
					alt="hamburger"
					onClick={() => handleMenu()}
					className="hamburger"
				/>
			</div>
			<div className={`modal ${isActive ? 'active' : ''}`}>
				<ul>
					<li>
						<a href="/#gallery">Gallery</a>
					</li>
					<li>
						<a href="/#generator">Generator</a>
					</li>
					<li>
						<a href="/#otherProducts">Other Products</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Menu;
