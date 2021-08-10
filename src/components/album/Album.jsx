import React, { useEffect, useState } from 'react';
import { fetchCoverArt } from '../../services/coverArtApi';

function Album({ title, id }) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    (async () => {

      const link = await fetchCoverArt(id);
      setUrl(link);
    })();
  });


  console.log('ALBUM ID', id);
  console.log(url);
  return (
    <>
      <h1>{title}</h1>
      <img src={url} alt={title} />
    </>
  );
}

export default Album;

