const Photo = ({ img }: IProps) => {
	return (
		<div className="galleryPhoto" style={{ backgroundImage: `url(${img})` }} />
	);
};

export default Photo;

type IProps = {
	img: string;
};
