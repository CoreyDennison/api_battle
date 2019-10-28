const getUserData = (accessToken) => {
  return fetch(`https://api.spotify.com/v1/me`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
  }).then(response => response.json())
};

const getArtist = (accessToken, q) => {
  return fetch(`https://api.spotify.com/v1/search?q=${q}&type=artist&limit=1`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }).then(repsonse => response.json())
  .then(response => console.log(response))
};

export default {
  getUserData,
  getArtist
}