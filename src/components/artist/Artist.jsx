import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Artist = ({ name, id }) => { 
  
  return (
    <ArtistStyled>
      <Link to={`/artist/${id}`}>
        <div>
          <p>{name}</p>
        </div>
      </Link>
    </ArtistStyled>
  );
};

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Artist;

const ArtistStyled = styled.div`
  margin: 0rem;
  padding: 1rem;
  background-color: whitesmoke;
  border: 1px solid black;
  
  transition: all ease-in-out 0.1s;

  &:hover {
    transform: scale(1.1);
    background-color: lightblue;
  }

  p {
    margin-left: 10px;
  }
`;
