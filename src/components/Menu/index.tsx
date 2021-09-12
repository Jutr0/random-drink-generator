import './style.scss';

import logo from '../../images/logo.svg';
import hamburger from '../../images/hamburger.svg';

const Menu = () => {
	return (
		<div className="menu">
			<img src={logo} alt="logo" />
			<img src={hamburger} alt="hamburger" />
		</div>
	);
};

export default Menu;
