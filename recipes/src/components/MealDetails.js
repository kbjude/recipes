import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({
  idmeal,
  meal,
  drink,
  category,
  area,
  instructions,
  strMealThumb,
  strTags,
  strIngredient1,
  strIngredient2,
  strIngredient3,
}) => (
  <>
    <h1>
      { meal }
      {' '}
    </h1>
    { idmeal}
    <h3>
      {' '}
      { drink }
      {' '}
    </h3>
    <h3>
      {' '}
      { category }
      {' '}
    </h3>
    <h3>
      {' '}
      { area }
      {' '}
    </h3>
    <h3>
      {' '}
      { instructions }
      {' '}
    </h3>
    <h3>
      { strMealThumb }
      {' '}
    </h3>
    { strTags }
    <h3>
      {' '}
      { strIngredient1 }
      {' '}
    </h3>
    <h3>
      {' '}
      { strIngredient2 }
      {' '}
    </h3>
    <h3>
      {' '}
      { strIngredient3 }
      {' '}
    </h3>
  </>
);

Detail.propTypes = {
  idmeal: PropTypes.string.isRequired,
  meal: PropTypes.string.isRequired,
  drink: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  strMealThumb: PropTypes.string.isRequired,
  strTags: PropTypes.string.isRequired,
  strIngredient1: PropTypes.string.isRequired,
  strIngredient2: PropTypes.string.isRequired,
  strIngredient3: PropTypes.string.isRequired,
};

export default Detail;
