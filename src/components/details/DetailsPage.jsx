import React from 'react';
import { useAlbums } from '../../state/artist';

function DetailsPage() {
  const { releases, loading } = useAlbums();
  if(loading) return <h1>Loading...</h1>;

  const albumElements = releases.map(album => (
    <li key={album.id}>
      <Album {...album} />
    </li>
  ));

  return (
    <div>
            
    </div>
  );
}

export default DetailsPage;

