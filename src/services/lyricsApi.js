export const fetchLyrics = async (artist, songTitle) => {
  const res = await fetch(`http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=${artist}&song=${songTitle}`, {
    mode: 'no-cors',
    // headers: {
    //   'content-type': 'application/json'
    // }
  });
  const lyrics = await res.json();
  return lyrics;
};
