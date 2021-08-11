import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Artist = ({ name, id }) => { 
  
  return (
    <Link to={`/artist/${id}`}>
      <div>
        <p>{name}</p>
        <p>{id}</p>
      </div>
    </Link>
  );
};

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Artist;
