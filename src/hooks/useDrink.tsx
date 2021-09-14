import { IDrink, IIngredient } from '../interfaces/drink';
import axios from 'axios';
import { useState } from 'react';

const useDrink = (): {
	drink: IDrink;
	getDrink: (id: string) => Promise<void>;
} => {
	const [drink, setDrink] = useState<IDrink>([] as IDrink);
	const getDrink = async (id: string) => {
		const tempDrink = await axios
			.get<{ drinks: IDrink[] | any }>(
				`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
			)
			.then((res) => {
				console.log(res.data.drinks[0]);
				return res.data.drinks[0];
			})
			.then((res) => {
				const ingredients = parseTableFromIngredientsAndMeasures(
					[
						res.strIngredient1,
						res.strIngredient2,
						res.strIngredient3,
						res.strIngredient4,
						res.strIngredient5,
						res.strIngredient6,
						res.strIngredient7,
						res.strIngredient8,
						res.strIngredient9,
						res.strIngredient10,
						res.strIngredient11,
						res.strIngredient12,
						res.strIngredient13,
						res.strIngredient14,
						res.strIngredient15,
					],
					[
						res.strMeasure1,
						res.strMeasure2,
						res.strMeasure3,
						res.strMeasure4,
						res.strMeasure5,
						res.strMeasure6,
						res.strMeasure7,
						res.strMeasure8,
						res.strMeasure9,
						res.strMeasure10,
						res.strMeasure11,
						res.strMeasure12,
						res.strMeasure13,
						res.strMeasure14,
						res.strMeasure15,
					],
				);
				return {
					idDrink: res.idDrink,
					strDrink: res.strDrink,
					strCategory: res.strCategory,
					strAlcoholic: res.strAlcoholic,
					strGlass: res.strGlass,
					strInstructions: res.strInstructions,
					strDrinkThumb: res.strDrinkThumb,
					ingredients,
				} as IDrink;
			})
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

const parseTableFromIngredientsAndMeasures = (
	ingredients: string[],
	measures: string[],
) => {
	const tab: IIngredient[] = [];
	for (const variable in ingredients) {
		if (ingredients[variable] !== null)
			tab.push({
				name: ingredients[variable],
				measure: measures[variable],
			});
	}
	return tab;
};
