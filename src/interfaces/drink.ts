export interface Ingredients {
  strIngredient: string | undefined;
  strMeasure: string | undefined;
}

export interface Instructions {
  strInstruction: string | undefined;
  strInstructionES: string | undefined;
  strInstructionDE: string | undefined;
  strInstructionFR: string | undefined;
  strInstructionIT: string | undefined;
  "strInstructionZH-HANS": string | undefined;
  "strInstructionZH-HANT": string | undefined;
}

export interface DrinkInfo {
  idDrink: string | undefined;
  strDrink: string | undefined;
  strDrinkAlternate: string | undefined;
  strTags: string | undefined;
  strVideo: string | undefined;
  strCategory: string | undefined;
  strIBA: string | undefined;
  strAlcoholic: string | undefined;
  strGlass: string | undefined;
  strDrinkThumb: string | undefined;
  strImageSource: string | undefined;
  strImageAttribution: string | undefined;
  strCreativeCommonsConfirmed: string | undefined;
  dateModified: string | undefined;
}

export interface Drink {
  drinkInfo: DrinkInfo;
  ingredients: Ingredients[];
  instructions: Instructions;
}

export interface DrinkResponse {
  idDrink: string | undefined;
  strDrink: string | undefined;
  strDrinkAlternate: string | undefined;
  strTags: string | undefined;
  strVideo: string | undefined;
  strCategory: string | undefined;
  strIBA: string | undefined;
  strAlcoholic: string | undefined;
  strGlass: string | undefined;
  strInstructions: string | undefined;
  strInstructionsES: string | undefined;
  strInstructionsDE: string | undefined;
  strInstructionsFR: string | undefined;
  strInstructionsIT: string | undefined;
  "strInstructionsZH-HANS": string | undefined;
  "strInstructionsZH-HANT": string | undefined;
  strDrinkThumb: string | undefined;
  strIngredient1: string | undefined;
  strIngredient2: string | undefined;
  strIngredient3: string | undefined;
  strIngredient4: string | undefined;
  strIngredient5: string | undefined;
  strIngredient6: string | undefined;
  strIngredient7: string | undefined;
  strIngredient8: string | undefined;
  strIngredient9: string | undefined;
  strIngredient10: string | undefined;
  strIngredient11: string | undefined;
  strIngredient12: string | undefined;
  strIngredient13: string | undefined;
  strIngredient14: string | undefined;
  strIngredient15: string | undefined;
  strMeasure1: string | undefined;
  strMeasure2: string | undefined;
  strMeasure3: string | undefined;
  strMeasure4: string | undefined;
  strMeasure5: string | undefined;
  strMeasure6: string | undefined;
  strMeasure7: string | undefined;
  strMeasure8: string | undefined;
  strMeasure9: string | undefined;
  strMeasure10: string | undefined;
  strMeasure11: string | undefined;
  strMeasure12: string | undefined;
  strMeasure13: string | undefined;
  strMeasure14: string | undefined;
  strMeasure15: string | undefined;
  strImageSource: string | undefined;
  strImageAttribution: string | undefined;
  strCreativeCommonsConfirmed: string | undefined;
  dateModified: string | undefined;
}
