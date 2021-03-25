import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({
  id, name, image, description,
}) => (
  <div>
    <h5>{id}</h5>
    <h3>{name}</h3>
    <img src={image} alt="" />
    <h3>{description}</h3>
  </div>
);

Meal.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Meal;
