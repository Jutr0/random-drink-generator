const Instructions = ({ instructions }: IProps) => {
	return (
		<section className="intructionsSection">
			<header>Instructions</header>
			<p>{instructions}</p>
		</section>
	);
};

export default Instructions;

type IProps = {
	instructions: string;
};
