import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import fetchMeals from '../api/fetchMeals';
import Ingredient from '../components/ingredient';

function Ingredients({ match }) {
  const { data } = useSelector(state => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMeals(match.params.name));
  }, []);

  return (
    <>
      <Link to={path}>
      {data.ingredients && data.ingredients.map(ingredient => (
        <Ingredient
          key={ingredient.idMeal}
          id={ingredient.idMeal}
          name={ingredient.strMeal}
          image={ingredient.strMealThumb}
        />
      ))}
      </Link>
    </>
  );
}

Ingredients.propTypes = {
  match: PropTypes.shape(
    { params: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired },
  ).isRequired,
  path: PropTypes.string.isRequired,
};
export default Ingredients;
