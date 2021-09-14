import { withRouter } from 'react-router-dom';
import DrinkShowcase from '../components/HomePage/DrinkShowcase';
import Gallery from '../components/HomePage/Gallery';
import OtherProducts from '../components/HomePage/OtherProducts';
import Slideshow from '../components/HomePage/Slideshow';

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
