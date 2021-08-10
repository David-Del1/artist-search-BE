export const fetchCoverArt = async (id) => {
  const res = await fetch(`http://coverartarchive.org/release/${id}/front`);
  
  if(res.status === 404) return 'https://placekitten.com/200/200';

  const coverArt = await res.url;
  console.log('COVER ART', coverArt);
  return coverArt;
};
