import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import Detail from './MealDetails';
// import fetchMealDetails from '../api/fetchMealDetails';

const Category = ({
  id, name, image, description, path,
}) => (
  <Link to={path}>
    <div>
      <h5>{id}</h5>
      <h3>{name}</h3>
      <img src={image} alt="" />
      <h3>{description}</h3>
    </div>
  </Link>
);

Category.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Category;
