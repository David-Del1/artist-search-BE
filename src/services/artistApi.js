/* eslint-disable max-len */

// const URL = 'http://musicbrainz.org/ws/2/artist?query=<SEARCH>&fmt=json&limit=25';

export const fetchArtists = async (name) => {
  const res = await fetch(`http://musicbrainz.org/ws/2/artist?query=${name}&fmt=json&limit=25`);
  console.log(res);
  const artists = await res.json();

  return artists;
};

