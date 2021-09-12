import Arrow from '../Arrow';

import gallery1 from '../../images/gallery1.jpg';
import gallery2 from '../../images/gallery2.jpg';
import gallery3 from '../../images/gallery3.jpg';
import gallery4 from '../../images/gallery4.jpg';
import gallery5 from '../../images/gallery5.jpg';

import './style.scss';
import Photo from './Photo';

const PHOTOS = [gallery1, gallery2, gallery3, gallery4, gallery5];

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
