export const fetchReleases = async (artistId, page) => {
  const res = await fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`);
  const releases = res.json();
  return releases.slice((page - 1) * 25, page * 25);
};
