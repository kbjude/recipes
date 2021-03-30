import { fetchMealsPending, fetchMealsSuccess, fetchMealsError } from '../actions/action';

function fetchMeals(strCategory) {
  const category = strCategory;
  return dispatch => {
    dispatch(fetchMealsPending());
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchMealsSuccess(res.meals));
        return res.meals;
      })
      .catch(error => {
        dispatch(fetchMealsError(error));
      });
  };
}

export default fetchMeals;
