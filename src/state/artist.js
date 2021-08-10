import { useEffect, useState } from 'react';
import { fetchArtists } from '../services/artistApi';
import { fetchReleases } from '../services/releasesApi';
export const useArtists = (name, page) => {

  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetchArtists(name, page)
      .then(setArtists)
      .finally(() => setLoading(false));
  }, [name]); // do we need to add page inside array?

  return { artists, loading };
};

export const getReleaseList = (artistId, page) => {

  const [loading, setLoading] = useState(true);
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    fetchReleases(artistId, page)
      .then(setReleases)
      .finally(() => setLoading(false));
  }, [artistId]); // do we need to add page inside array?

  return { releases, loading };
};
