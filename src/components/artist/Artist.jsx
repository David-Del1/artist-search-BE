import React from 'react';
import { Link } from 'react-router-dom';

const Artist = ({ name, id }) => {  //id comes from parameter or do we use useParams method of react-router-dom???????????  OR either???
  
  return (
    <Link to={`/${id}`}>
      <div>
        <p>{name}</p>
        <p>{id}</p>
      </div>
    </Link>
  );
};

export default Artist;
