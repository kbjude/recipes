import { fetchMealIngredientsPending, fetchMealIngredientsSuccess, fetchMealIngredientsError } from '../actions/action';

function fetchMeals(strMeal) {
  const meal = strMeal;
  return dispatch => {
    dispatch(fetchMealIngredientsPending());
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchMealIngredientsSuccess(res.meals));
        return res.meals;
      })
      .catch(error => {
        dispatch(fetchMealIngredientsError(error));
      });
  };
}

export default fetchMeals;
