import React from 'react';
import { Link } from 'react-router-dom';

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

export default Artist;
