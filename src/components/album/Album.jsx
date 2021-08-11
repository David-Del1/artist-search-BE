import React, { useEffect, useState } from 'react';
import { fetchCoverArt } from '../../services/coverArtApi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Album({ title, id }) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    (async () => {
      const link = await fetchCoverArt(id);
      setUrl(link);
    })();
  });

  return (
    <section>
      <Link to={`/artist/album/${id}`}>
        <h1>{title}</h1>
        <img src={url} alt={title} />
      </ Link>
    </section>
  );
}

Album.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Album;

