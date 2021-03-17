import React from 'react';
import PropTypes from 'prop-types';

const Spice = ({
    id, name, category
}) => (
<h3>{name}</h3>,
<h3>{category}</h3>
);

Spice.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

export default Spice;