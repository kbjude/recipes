import { fetchMealDetailsPending, fetchMealDetailsSuccess, fetchMealDetailsError } from '../actions/action';

function fetchMealDetails() {
  return dispatch => {
    dispatch(fetchMealDetailsPending());
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchMealDetailsSuccess(res.meals));
        return res.meals;
      })
      .catch(error => {
        dispatch(fetchMealDetailsError(error));
      });
  };
}

export default fetchMealDetails;
