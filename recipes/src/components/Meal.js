import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import Detail from './MealDetails';
// import fetchMealDetails from '../api/fetchMealDetails';

const Meal = ({
  id, name, image,
}) => (
  <div>
    <h5>{id}</h5>
    <h3>{name}</h3>
    <img src={image} alt="" />
  </div>
);

Meal.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Meal;
