export const fetchLyrics = async (artist, songTitle) => {
  const res = await fetch(`http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=${artist}&song=${songTitle}`);
  const lyrics = await res.json();
  console.log(lyrics);
  return lyrics;
};
