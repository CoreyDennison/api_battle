const getUserData = (accessToken) => {
  return fetch(`https://api.spotify.com/v1/me`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
  }).then(response => response.json())
};

const getArtist = (accessToken, artist1name) => {

  var artist1name = artist1.value;

  return fetch(`https://api.spotify.com/v1/search?q=${artist1name}&type=artist&limit=1`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }).then(response => response.json())
};

export default {
  getUserData,
  getArtist
}