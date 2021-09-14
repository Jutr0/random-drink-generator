import Arrow from '../../Arrow';

import { GALLERY_IMAGES as PHOTOS } from '../../../utils/constants';

import './style.scss';
import Photo from './Photo';

const Gallery = () => {
	return (
		<section className="gallery">
			<h1 className="galleryHeader">Dbamy o twoje zdrowie</h1>
			<div className="galleryInfoContainer">
				<p className="galleryInfo">
					Club local is where craftpeople and expert figures meet to combine
					their knowledge and their voice to create inspiring projects.
				</p>
				<Arrow thickness="thin" width={56} />
			</div>
			<div className="photosContainer">
				{PHOTOS.map((photo) => (
					<Photo img={photo} />
				))}
			</div>
			<div style={{ clear: 'both' }} />
		</section>
	);
};

export default Gallery;
