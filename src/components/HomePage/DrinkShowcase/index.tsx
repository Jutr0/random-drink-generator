import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRandomDrink from '../../../hooks/useRandomDrink';
import { IDrink } from '../../../interfaces/drink';
import './style.scss';

const DrinkShowcase = () => {
	const { randomDrink, getRandomDrink } = useRandomDrink();

	useEffect(() => {
		getRandomDrink();
	}, []);

	const handleDraw = () => {
		getRandomDrink();
	};

	return (
		<section className="ds-background" id="generator">
			<button className="ds-randomButton" onClick={handleDraw}>
				Losuj
			</button>
			<Link to={'/details/' + randomDrink.idDrink}>
				<div
					className="ds-image"
					style={{ backgroundImage: `url(${randomDrink.strDrinkThumb})` }}
				></div>
				<div className="ds-name">{randomDrink.strDrink}</div>
			</Link>
		</section>
	);
};

export default DrinkShowcase;
