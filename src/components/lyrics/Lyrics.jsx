import React from 'react';
import { useParams } from 'react-router-dom';
import { useLyrics } from '../../state/artist';

function Lyrics() {

  const { title } = useParams();
  const { lyrics, loading } = useLyrics('Madonna', title);

  if(loading) return <h1>Loading...</h1>;

  return (
    <div>
      {lyrics}
    </div>
  );
}

export default Lyrics;

