import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import Detail from './MealDetails';
// import fetchMealDetails from '../api/fetchMealDetails';

const Meal = ({
  id, name, image, description,
}) => (
  <div>
    <h5>{id}</h5>
    <h3>{name}</h3>
    <img src={image} alt="" />
    <h3>{description}</h3>

    {/* {data.meals.map(meal => (
        <Detail
          key={meal.idMeal}
          idmeal={meal.idMeal}
          meal={meal.strMeal}
          drink={meal.strDrinkAlternate}
          category={meal.strCategory}
          area={meal.strArea}
          instructions={meal.strInstructions}
        />
      ))} */}
  </div>
);

Meal.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Meal;
