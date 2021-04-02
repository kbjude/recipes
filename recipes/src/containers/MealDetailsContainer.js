import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMealDetails } from '../api/fetchMeals';
import MealDetails from '../components/MealDetails';

function MealDetailsContainer({ match }) {
  const { mealDetails } = useSelector(state => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMealDetails(match.params.id));
  }, []);
  return (
    <>
      {mealDetails.details && mealDetails.details.map(meal => (
        <MealDetails
          key={meal.idMeal}
          id={meal.idMeal}
          name={meal.strMeal}
          image={meal.strMealThumb}
          path={`/meals/details/${meal.idMeal}`}
        />
      ))}
    </>
  );
}

MealDetailsContainer.propTypes = {
  match: PropTypes.shape(
    { params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired },
  ).isRequired,
};
export default MealDetailsContainer;
