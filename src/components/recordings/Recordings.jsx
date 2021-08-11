import React from 'react';
import { useRecordings } from '../../state/artist';
import { Link, useParams } from 'react-router-dom';
import Lyrics from '../lyrics/Lyrics';

const Recordings = () => {

  // const [searchedRecordings, setRecordings] = useState(''); 

  const { id } = useParams();
  const { recordings, loading } = useRecordings(id); 

  if(loading) return <h1>Loading...</h1>;

  const recordingElements = recordings.map(record => {
    return (
      <Link to={`/artist/album/lyrics/${record.title}/${record.somethingimnotsure}`}>
        <li key={record.id}>
          <h2>{record.title}</h2>
          <Lyrics />
        </li>
      </Link>
    );
  });

  return (
    <ul>{recordingElements}</ul>
  );
 
};

export default Recordings;
