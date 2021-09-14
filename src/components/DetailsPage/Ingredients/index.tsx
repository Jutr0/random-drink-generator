import { IIngredient } from '../../../interfaces/drink';

const Ingredients = ({ ingredients }: IProps) => {
	return (
		<section className="ingredientsSection">
			<header className="header">Ingredients</header>
			<ul>
				{ingredients?.map((step) => (
					<li>
						{step.name} - {step.measure}
					</li>
				))}
			</ul>
		</section>
	);
};

export default Ingredients;

type IProps = {
	ingredients: IIngredient[];
};
