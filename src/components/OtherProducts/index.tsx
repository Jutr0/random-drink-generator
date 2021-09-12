import Arrow from '../Arrow';
import OtherProduct from './OtherProduct';

import './style.scss';

const OtherProducts = () => {
	return (
		<section className="op-background">
			<span className="op-text">Poznaj nasze inne produkty</span>
			<div className="op-productsContainer">
				<OtherProduct />
				<OtherProduct />
				<OtherProduct />
				<OtherProduct />
			</div>
		</section>
	);
};

export default OtherProducts;
