import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAlbums } from '../../state/artist';
import Album from './Album';
import styled from 'styled-components';

function AlbumList() {
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
      <AlbumListStyled>
        {albumElements}
      </AlbumListStyled>
      <div className="buttons">
        <button disabled={page <= 1} onClick={() => setPage((prevPage) => prevPage - 1)}>☜</button>
        <button disabled={releases.length < 5} onClick={() => setPage((prevPage) => prevPage + 1)}>☞</button>
      </div>
    </>
  );
}

export default AlbumList;


const AlbumListStyled = styled.ul`
  margin-top: 4rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img{
    max-height: 200px;
  }
`;
