import { withRouter } from 'react-router-dom';
import DrinkShowcase from '../components/DrinkShowcase';
import Gallery from '../components/Gallery';
import OtherProducts from '../components/OtherProducts';
import Slideshow from '../components/Slideshow';

const Home = () => {
	return (
		<>
			<Slideshow />
			<Gallery />
			<DrinkShowcase />
			<OtherProducts />
		</>
	);
};

export default withRouter(Home);
