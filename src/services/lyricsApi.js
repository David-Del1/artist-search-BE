export const fetchLyrics = async (artist, songTitle) => {
  console.log('HEEELLOOOOOOOOOOO???!!');
  const res = await fetch(`http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=${artist}&song=${songTitle}`, {
    mode: 'no-cors',
    // headers: {
    //   'content-type': 'application/json'
    // }
  });
  console.log(res);
  const lyrics = await res.json();
  console.log(lyrics);
  return lyrics;
};
