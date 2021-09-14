import Arrow from '../../../Arrow';

const OtherProduct = ({ image }: IProps) => {
	return (
		<div className="op-product">
			<div
				className="op-image"
				style={{ backgroundImage: `url('${image}')` }}
			></div>
			<Arrow thickness="thin" width={64} />
		</div>
	);
};

export default OtherProduct;

type IProps = {
	image: string;
};
