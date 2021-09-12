import { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import useDrink from '../hooks/useDrink';

const Details = (props: IProps) => {
	const { drink, getDrink } = useDrink();

	useEffect(() => {
		getDrink(props.match.params.id);
		console.log(drink);
	}, []);

	return (
		<div className="detailsBackground">
			<br />
			<br />
			<br />
			<br />
			<br />
			<div>{drink.idDrink}</div>
			<div>{drink.strDrink}</div>
			<div>{drink.strCategory}</div>
			<div>{drink.strAlcoholic}</div>
			<div>{drink.strGlass}</div>
			<img src={drink.strDrinkThumb} />
			<div>{drink.strInstructions}</div>
		</div>
	);
};

export default withRouter(Details);

interface IProps extends RouteComponentProps<{ id: string }> {}
