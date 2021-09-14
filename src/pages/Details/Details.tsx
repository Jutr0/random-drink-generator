import { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Ingredients from '../../components/DetailsPage/Ingredients';
import Instructions from '../../components/DetailsPage/Instructions';
import MainInfo from '../../components/DetailsPage/MainInfo';
import useDrink from '../../hooks/useDrink';

import './style.scss';

const Details = (props: IProps) => {
	const { drink, getDrink } = useDrink();

	useEffect(() => {
		getDrink(props.match.params.id);
		console.log(drink);
	}, []);

	return (
		<main className="detailsBackground">
			<MainInfo
				alcoholic={drink.strAlcoholic!}
				category={drink.strCategory!}
				glass={drink.strGlass!}
				thumbnail={drink.strDrinkThumb!}
				name={drink.strDrink!}
			/>
			<Ingredients ingredients={drink.ingredients!} />
			<Instructions instructions={drink.strInstructions!} />
		</main>
	);
};

export default withRouter(Details);

interface IProps extends RouteComponentProps<{ id: string }> {}
