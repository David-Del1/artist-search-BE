import React from 'react';
import { useArtists } from '../../state/artist.js';

function ArtistList() {
  const { artists, loading } = useArtists();

  if(loading) return <h1>Loading...</h1>

  const artistElements = artists.map(artist => (
    <li key={artist.id}>
      <Artist />
    </li>
  ));
  return (
    <>
      <ul>
        {artistElements}
      </ul>
    </>
  );
}

export default ArtistList;

