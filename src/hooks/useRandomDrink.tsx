import { IDrink } from '../interfaces/drink';
import axios from 'axios';
import { useState } from 'react';

const useRandomDrink = (): {
	randomDrink: IDrink;
	getRandomDrink: () => Promise<void>;
} => {
	const [randomDrink, setRandomDrink] = useState<IDrink>([] as IDrink);
	const getRandomDrink = async () => {
		const tempDrink = await axios
			.get<{ drinks: IDrink[] }>(
				'https://www.thecocktaildb.com/api/json/v1/1/random.php',
			)
			.then((res) => {
				console.log(res);
				return res.data.drinks[0];
			})
			.then(
				({
					idDrink,
					strDrink,
					strCategory,
					strAlcoholic,
					strGlass,
					strInstructions,
					strDrinkThumb,
				}) => {
					return {
						idDrink,
						strDrink,
						strCategory,
						strAlcoholic,
						strGlass,
						strInstructions,
						strDrinkThumb,
					} as IDrink;
				},
			)
			.catch((err) => {
				console.error(err);
				return [] as IDrink;
			});
		setRandomDrink(tempDrink);
		console.log(tempDrink);
	};
	return { randomDrink, getRandomDrink };
};
export default useRandomDrink;
