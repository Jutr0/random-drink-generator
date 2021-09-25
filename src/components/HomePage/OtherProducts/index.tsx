import Arrow from '../../Arrow';
import OtherProduct from './OtherProduct';
import { OTHER_PRODUCTS_IMAGES } from '../../../utils/constants';

import './style.scss';

const OtherProducts = () => {
	return (
		<section className="op-background" id="otherProducts">
			<span className="op-text">Poznaj nasze inne produkty</span>
			<div className="op-productsContainer">
				{OTHER_PRODUCTS_IMAGES.map((step) => (
					<OtherProduct image={step} />
				))}
			</div>
		</section>
	);
};

export default OtherProducts;
