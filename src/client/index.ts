import axios, { AxiosInstance } from "axios";
import { Drink, DrinkResponse, Ingredients, Instructions, DrinkInfo } from "../interfaces/drink";

type KeysDrink = keyof DrinkResponse;
type KeysInstructions = keyof Instructions;
type KeysDrinkInfo = keyof DrinkInfo;

declare global {
  interface Array<T> {
    asyncForEach<T>(callback: (element: T, index: number, arr: T[]) => Promise<void>): void;
  }
}

Array.prototype.asyncForEach = async function <T>(callback: (element: T, index: number, arr: T[]) => Promise<void>) {
  for(let i = 0; i < this.length; i++) {
    await callback(this[i], i, this);
  }
} 

class Api {
  private client: AxiosInstance;
  private url: string;

  constructor() {
    this.url = "https://www.thecocktaildb.com/api/json/v1/1";
    this.client = axios.create({
      baseURL: this.url,
      timeout: 1000,
    });
  }

  public async getAll() {
    let result: any = [];

    [...Array(25)].asyncForEach(async () => {
      const response = await this.client.get(`/random.php`);
      result = [...result, ...response.data.drinks]
    })

    return this.parseResponse(result);
  }

  public async searchByName(name: string): Promise<Drink[]> {
    const response = await this.client.get(`/search.php?s=${name}`);
    return this.parseResponse(response.data.drinks);
  }

  public async getById(id: string): Promise<Drink> {
    const response = await this.client.get(`/lookup.php?i=${id}`);
    return this.parseResponse(response.data.drinks)[0];
  }

  private parseResponse(data: DrinkResponse[]): Drink[] {
    return data.map((element: DrinkResponse) => {
      const obj: Drink = {} as Drink;

      obj.ingredients = this.parseIngredient(element);
      obj.instructions = this.parseInstruction(element);
      obj.drinkInfo = this.filterParse(element);

      return obj;
    });
  }

  private parseIngredient(element: DrinkResponse): Ingredients[] {
    const arr: Ingredients[] = [];

    [...Array(15)].forEach((_: undefined, index: number) => {
      const strIngredient = element[`strIngredient${index + 1}` as KeysDrink];
      const strMeasure = element[`strMeasure${index + 1}` as KeysDrink];

      if (strIngredient) {
        arr.push({
          strIngredient,
          strMeasure: strMeasure ? strMeasure : "",
        });
      }
    });

    return arr.filter((el: Ingredients | undefined) => el);
  }

  private parseInstruction(element: DrinkResponse): Instructions {
    const obj: Instructions = {} as Instructions;
    const langs = ["", "ES", "DE", "FR", "IT", "ZH-HANS", "ZH-HANT"];

    langs.forEach((lang: string) => (obj[`strInstruction${lang}` as KeysInstructions] = element[`strInstructions${lang}` as KeysDrink]));

    return obj;
  }

  private filterParse(element: DrinkResponse): DrinkInfo {
    const obj: DrinkInfo = {} as DrinkInfo;

    Object.keys(element).forEach((key: string) => {
      if (!key.includes("strIngredient") && !key.includes("strMeasure") && !key.includes("strInstructions")) {
        obj[key as KeysDrinkInfo] = element[key as KeysDrink];
      }
    });

    return obj;
  }
}

export default new Api();
