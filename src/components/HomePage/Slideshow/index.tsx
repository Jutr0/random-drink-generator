import Arrow from '../../Arrow';
import ImagePreviewer from './ImagePreviewer';

import './style.scss';

const Slideshow = () => {
	return (
		<section className="slideshow" id="slideshow">
			<div className="ss-bottomInfo">
				<div className="ss-left">
					<ImagePreviewer />
					<div className="tryDrinkGroup">
						<div className="tryDrinkText">Spróbuj Spritz Les Iles</div>
						<Arrow thickness="thin" />
					</div>
				</div>
				<a href="#gallery">
					<button className="goDownButton">
						<Arrow thickness="thin" direction="down" width={32} />
					</button>
				</a>
			</div>
		</section>
	);
};

export default Slideshow;
