export interface IDrink {
	idDrink?: string;
	strDrink?: string;
	strCategory?: string;
	strAlcoholic?: string;
	strGlass?: string;
	strInstructions?: string;
	strDrinkThumb?: string;
	ingredients?: IIngredient[];
}

export interface IIngredient {
	name: string;
	measure: string;
}
