import React from 'react';
import { Link } from 'react-router-dom';

const Artist = ({ name }) => {  //id comes from parameter or do we use useParams method of react-router-dom???????????  OR either???

  return (
    <p>{name}</p>
  );
};

export default Artist;
