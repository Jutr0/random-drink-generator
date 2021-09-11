import Arrow from '../Arrow';
import ImagePreviewer from './ImagePreviewer';

const Slideshow = () => {
	return (
		<section className="slideshow">
			<div className="ss-bottomInfo">
				<ImagePreviewer />
				<div className="tryDrinkText">Spróbuj Spritz Les Iles</div>
				<Arrow thickness="thin" />
				<div className="goDownButton">
					<div className=""></div>
				</div>
			</div>
		</section>
	);
};

export default Slideshow;
