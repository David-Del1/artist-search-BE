export const fetchRecordings = async (releaseId) => {
  const res = await fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`);
  const releases = await res.json();
  return releases.recordings;
};
