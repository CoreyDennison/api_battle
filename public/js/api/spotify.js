
//artist 1 search
const getArtist = (accessToken) => {

  var artist1name = artist1.value;

  return fetch(`https://api.spotify.com/v1/search?q=${artist1name}&type=artist&limit=1`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }).then(response => response.json())
};


//artist 2 search
const getArtist2 = (accessToken) => {

  var artist2name = artist2.value;

  return fetch(`https://api.spotify.com/v1/search?q=${artist2name}&type=artist&limit=1`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }).then(response => response.json())
};


export default {
  getArtist,
  getArtist2
}