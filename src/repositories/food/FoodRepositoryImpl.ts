import { customAxios } from "../../lib/axios";
import { Food, FoodName } from "../../types/food/food.type";
import {
  FoodRepository,
  getFoodNamesByTypeParam,
  getFoodByNameParam,
} from "./FoodRepository";

class FoodRepositoryImpl implements FoodRepository {
  public async getFoodNamesByType({
    type,
  }: getFoodNamesByTypeParam): Promise<FoodName[]> {
    const { data } = await customAxios.get(`/food/type?type=${type}`);
    return data;
  }

  public async getFoodByName({ name }: getFoodByNameParam): Promise<Food> {
    const { data } = await customAxios.get(`/food/name?name=${name}`);
    return data;
  }

  public async getFoodNamesBySearchCount(): Promise<FoodName[]> {
    const { data } = await customAxios.get("/food/ranking");
    return data;
  }

  public async getRandomFood(): Promise<Food> {
    const { data } = await customAxios.get("/food/random");
    return data;
  }
}

export default new FoodRepositoryImpl();
