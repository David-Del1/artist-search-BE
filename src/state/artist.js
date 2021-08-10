import { useEffect, useState } from 'react';
import { fetchArtists } from '../services/artistApi';

export const useArtists = (name) => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetchArtists(name)
      .then(setArtists)
      .finally(() => setLoading(false));
  }, [name]);

  return { artists, loading };
};
