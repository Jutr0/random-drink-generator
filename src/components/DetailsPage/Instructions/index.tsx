import './style.scss';

const Instructions = ({ instructions }: IProps) => {
	return (
		<section className="instructionsSection">
			<header>Instructions</header>
			<p>{instructions}</p>
		</section>
	);
};

export default Instructions;

type IProps = {
	instructions: string;
};
