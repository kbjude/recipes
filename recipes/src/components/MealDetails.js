import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({
  idmeal, meal, drink, category, area, instructions,
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
  </>
);

Detail.propTypes = {
  idmeal: PropTypes.string.isRequired,
  meal: PropTypes.string.isRequired,
  drink: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
};

export default Detail;
