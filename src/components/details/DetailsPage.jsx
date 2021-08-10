import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAlbums } from '../../state/artist';
import Album from '../album/Album';

function DetailsPage() {
  const [page, setPage] = useState(1);
  const { id } = useParams();

  const { releases, loading } = useAlbums(id, page);
  if(loading) return <h1>Loading...</h1>;

  const albumElements = releases.map(album => (
    <li key={album.id}>
      <Album {...album} />
    </li>
  ));

  return (
    <>
      <ul>
        {albumElements}
      </ul>

      <button disabled={page <= 1} onClick={() => setPage((prevPage) => prevPage - 1)}>&lt;</button>
      <button disabled={releases.length < 25} onClick={() => setPage((prevPage) => prevPage + 1)}>&gt;</button>
    </>
  );
}

export default DetailsPage;

