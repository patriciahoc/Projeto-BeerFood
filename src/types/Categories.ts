export interface Food {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface FoodCategory {
  idCategory: string;
  strCategory: string;
}

export interface FoodsTypes {
  foodCategories: FoodCategory[];
}
