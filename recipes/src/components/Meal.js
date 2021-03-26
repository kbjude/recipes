import React from 'react';
import PropTypes from 'prop-types';
import Detail from './MealDetails';
import fetchMealDetails from '../api/fetchMealDetails';

const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchMealDetails());
}, []);

const Meal = ({
  id, name, image, description,
}) => (
  <div>
    <h5>{id}</h5>
    <h3>{name}</h3>
    <img src={image} alt="" />
    <h3>{description}</h3>

    <Detail idmeal="1" meal="Chicken" drink="Soda" category="Rocke" area="Soho" instructions="great" />
  </div>
);

Meal.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Meal;
