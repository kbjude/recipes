import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({
  id, name, category,
}) => (
  <div>
    <h5>{id}</h5>
    <h3>{name}</h3>
    <h3>{category}</h3>
    <button type="button">Testing</button>
  </div>
);

Meal.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Meal;
