import React, { useState } from 'react';
import { useArtists } from '../../state/artist.js';
import Artist from './Artist';
import styled from 'styled-components';

const ArtistList = () => {

  const [searchedArtist, setArtist] = useState('');
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
    <ArtistListStyled>
      <>
        <form onSubmit={handleSubmit}>
          <input placeholder="Search artist" onChange={((e) => setArtist(e.target.value))} value={searchedArtist}></input>
        </form>
      </>
      <section>
        <ul>
          {artistElements}
        </ul>
        
        <div className="buttons">
          <button disabled={page <= 1} onClick={() => setPage((prevPage) => prevPage - 1)}>☜</button>
          <button disabled={artists.length < 10} onClick={() => setPage((prevPage) => prevPage + 1)}>☞</button>
        </div>

      </section>
    </ArtistListStyled>
  );
};

export default ArtistList;


const ArtistListStyled = styled.div`
  position: relative;
  form {

    input {
      width: 80%;
      margin: 1rem;
      font-size: 1.5rem;
      outline: none;
      border: none;
      border-bottom: 1px solid gray;
    }

    
  }

  .buttons {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
    button {
        font-size: 2rem;
        border: none;
        background-color: transparent;
        outline: none;
        
      }
  }

  ul {
    list-style: none;
  }

  
`;
