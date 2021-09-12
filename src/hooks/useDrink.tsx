import { IDrink } from '../interfaces/drink';
import axios from 'axios';
import { useState } from 'react';

const useDrink = (): {
	drink: IDrink;
	getDrink: (id: string) => Promise<void>;
} => {
	const [drink, setDrink] = useState<IDrink>([] as IDrink);
	const getDrink = async (id: string) => {
		const tempDrink = await axios
			.get<{ drinks: IDrink[] }>(
				`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
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
		setDrink(tempDrink);
		console.log(tempDrink);
	};
	return { drink, getDrink };
};
export default useDrink;
