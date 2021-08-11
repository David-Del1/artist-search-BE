import React from 'react';
import { useRecordings } from '../../state/artist';
import { useParams } from 'react-router-dom';

const Recordings = () => {

  const { id } = useParams();
  const { recordings, loading } = useRecordings(id); 

  if(loading) return <h1>Loading...</h1>;

  const recordingElements = recordings.map(record => {
    return (
      <li key={record.id}>
        <h2>{record.title}</h2>
      </li>
    );
  });

  return (
    <ul>{recordingElements}</ul>
  );
 
};

export default Recordings;
