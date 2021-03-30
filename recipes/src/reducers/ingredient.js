import { FETCH_INGREDIENT_PENDING, FETCH_INGREDIENT_SUCCESS, FETCH_INGREDIENT_ERROR } from '../actions/action';

export const initialState = {
  pending: false,
  ingredients: [],
  error: null,
};

export function ingredientsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_INGREDIENT_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_INGREDIENT_SUCCESS:
      return {
        ...state,
        pending: false,
        meals: action.meals,
      };
    case FETCH_INGREDIENT_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getMeals = state => state.meals;
export const getMealsPending = state => state.pending;
export const getMealsError = state => state.error;
