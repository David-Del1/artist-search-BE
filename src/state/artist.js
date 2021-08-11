import { useEffect, useState } from 'react';
import { fetchArtists } from '../services/artistApi';
import { fetchRecordings } from '../services/recordingsApi';
import { fetchReleases } from '../services/releasesApi';

export const useArtists = (name, page) => {

  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetchArtists(name, page)
      .then(setArtists)
      .finally(() => setLoading(false));
  }, [name, page]); 

  return { artists, loading };
};

export const useAlbums = (artistId, page) => {

  const [loading, setLoading] = useState(true);
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    fetchReleases(artistId, page)
      .then(setReleases)
      .finally(() => setLoading(false));
  }, [artistId, page]);

  return { releases, loading };
};

export const useRecordings = (releaseId) => {

  const [loading, setLoading] = useState(true);
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    fetchRecordings(releaseId)
      .then(setRecordings)
      .finally(() => setLoading(false));
  }, [releaseId]);

  return { recordings, loading };
};
