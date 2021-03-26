export const FETCH_MEALS_PENDING = 'FETCH_MEALS_PENDING';
export const FETCH_MEALS_SUCCESS = 'FETCH_MEALS_SUCCESS';
export const FETCH_MEALS_ERROR = 'FETCH_MEALS_ERROR';
export const FETCH_MEAL_DETAIL_PENDING = 'FETCH_MEAL_DETAIL_PENDING';
export const FETCH_MEAL_DETAIL_SUCCESS = 'FETCH_MEAL_DETAIL_SUCCESS';
export const FETCH_MEAL_DETAIL_ERROR = 'FETCH_MEAL_DETAIL_ERROR';

function fetchMealsPending() {
  return {
    type: FETCH_MEALS_PENDING,
  };
}

function fetchMealsSuccess(meals) {
  return {
    type: FETCH_MEALS_SUCCESS,
    meals,
  };
}

function fetchMealsError(error) {
  return {
    type: FETCH_MEALS_ERROR,
    error,
  };
}

export const fetchMealDetailsPending = () => ({
  type: FETCH_MEAL_DETAIL_PENDING,
});

export const fetchMealDetailsSuccess = detail => ({
  type: FETCH_MEAL_DETAIL_SUCCESS,
  detail,
});

export const fetchMealDetailsError = error => ({
  type: FETCH_MEAL_DETAIL_ERROR,
  error,
});

export {
  fetchMealsPending,
  fetchMealsSuccess,
  fetchMealsError,
};
