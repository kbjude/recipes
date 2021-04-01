export const FETCH_MEALS_PENDING = 'FETCH_MEALS_PENDING';
export const FETCH_MEALS_SUCCESS = 'FETCH_MEALS_SUCCESS';
export const FETCH_MEALS_ERROR = 'FETCH_MEALS_ERROR';
export const FETCH_MEAL_INGREDIENT_PENDING = 'FETCH_INGREDIENT_PENDING';
export const FETCH_MEAL_INGREDIENT_SUCCESS = 'FETCH_MEAL_INGREDIENT_SUCCESS';
export const FETCH_MEAL_INGREDIENT_ERROR = 'FETCH_INGREDIENT_ERROR';
export const FETCH_CATEGORIES_PENDING = 'FETCH_CATEGORIES_PENDING';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR';
export const FETCH_INGREDIENT_PENDING = 'FETCH_INGREDIENT_PENDING';
export const FETCH_INGREDIENT_SUCCESS = 'FETCH_INGREDIENT_SUCCESS';
export const FETCH_INGREDIENT_ERROR = 'FETCH_INGREDIENT_SUCCESS';

export function fetchMealsPending() {
  return {
    type: FETCH_MEALS_PENDING,
  };
}

export function fetchMealsSuccess(meals) {
  return {
    type: FETCH_MEALS_SUCCESS,
    meals,
  };
}

export function fetchMealsError(error) {
  return {
    type: FETCH_MEALS_ERROR,
    error,
  };
}

export function fetchCategoriesPending() {
  return {
    type: FETCH_CATEGORIES_PENDING,
  };
}

export function fetchCategoriesSuccess(categories) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories,
  };
}

export function fetchCategoriesError(error) {
  return {
    type: FETCH_CATEGORIES_ERROR,
    error,
  };
}

export const fetchMealIngredientsPending = () => ({
  type: FETCH_MEAL_INGREDIENT_PENDING,
});

export const fetchMealIngredientsSuccess = detail => ({
  type: FETCH_MEAL_INGREDIENT_SUCCESS,
  detail,
});

export const fetchMealIngredientsError = error => ({
  type: FETCH_MEAL_INGREDIENT_ERROR,
  error,
});
