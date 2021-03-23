export const FETCH_MEALS_PENDING = 'FETCH_MEALS_PENDING';
export const FETCH_MEALS_SUCCESS = 'FETCH_MEALS_SUCCESS';
export const FETCH_MEALS_ERROR = 'FETCH_MEALS_ERROR';

function fetchMealsPending() {
    return {
        type: FETCH_MEALS_PENDING
    }
}

function fetchProductsSuccess(meals) {
    return {
        type: FETCH_MEALS_SUCCESS,
        meals: meals
    }
}

function fetchMealsError(error) {
    return {
        type: FETCH_MEALS_ERROR,
        error: error
    }
}