/* eslint-disable max-len */

// const URL = 'http://musicbrainz.org/ws/2/artist?query=<SEARCH>&fmt=json&limit=25';

export const fetchArtists = async (name, page) => {
  const res = await fetch(`http://musicbrainz.org/ws/2/artist?query=${name}&fmt=json&limit=25`);
  const artists = await res.json();
  const filteredArtists = artists.artists;

  return filteredArtists.slice((page - 1) * 25, page * 25);
};

