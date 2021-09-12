import './style.scss';

const Arrow = ({
	width = 40,
	direction = 'right',
	thickness = 'normal',
}: IProps) => {
	return (
		<div className="arrowContainer">
			<div
				className={`arrow arrow-${direction} arrow-${thickness} arrow-w${width}`}
			></div>
		</div>
	);
};

export default Arrow;

type IProps = {
	width?: 24 | 32 | 40 | 48 | 56 | 64;
	direction?: 'up' | 'down' | 'left' | 'right';
	thickness?: 'thin' | 'normal' | 'thick';
};
