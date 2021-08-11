import React, { useEffect, useState } from 'react';
import { fetchCoverArt } from '../../services/coverArtApi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Album({ title, id }) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    (async () => {
      const link = await fetchCoverArt(id);
      setUrl(link);
    })();
  });

  return (
    <AlbumStyled>
      <Link to={`/artist/album/${id}`}>
        <h1>{title}</h1>
        <img src={url} alt={title} />
      </ Link>
    </AlbumStyled>
  );
}

Album.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Album;

const AlbumStyled = styled.section`
  background-color: lightblue;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all ease-in-out 0.2s;
  border-radius: 15px;

  &:hover {
    transform: rotate(-10deg);
    background-color: tomato;
  }
`;

