import { fetchMealsPending, fetchMealsSuccess, fetchMealsError } from '../actions/action';

function fetchMeals() {
  return dispatch => {
    dispatch(fetchMealsPending());
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchMealsSuccess(res.categories));
        return res.categories;
      })
      .catch(error => {
        dispatch(fetchMealsError(error));
      });
  };
}

export default fetchMeals;
