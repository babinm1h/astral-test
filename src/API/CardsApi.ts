import { $instance } from ".";
import { ICard } from "../types/entities";

export class CardsApi {
  static async fetchCards() {
    const { data } = await $instance.get<ICard[]>("/cards");
    return data;
  }
}
