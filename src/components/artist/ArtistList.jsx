import React, { useState } from 'react';
import { useArtists } from '../../state/artist.js';
import Artist from './Artist';

const ArtistList = () => {

  const [searchedArtist, setArtist] = useState('artist\'s name');
  const [page, setPage] = useState(1);

  const { artists, loading } = useArtists(searchedArtist, page);

  if(loading) return <h1>Loading...</h1>;

  const artistElements = artists.map(artist => (
    <li key={artist.id}>
      <Artist {...artist} />
    </li>
  ));

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <>
        <form onSubmit={handleSubmit}>
          <input placeholder="artists name" onChange={((e) => setArtist(e.target.value))} value={searchedArtist}></input>
        </form>
      </>
      <section>
        <ul>
          {artistElements}
        </ul>
        
        <button disabled={page <= 1} onClick={() => setPage((prevPage) => prevPage - 1)}>&lt;</button>
        <button disabled={artists.length < 10} onClick={() => setPage((prevPage) => prevPage + 1)}>&gt;</button>

      </section>
    </>
  );
};

export default ArtistList;

