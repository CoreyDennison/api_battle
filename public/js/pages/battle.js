//import SpotifyAPI from "../api/spotify.js";
//import {getHashParams} from "../helpers/url.js";
//import {STATE_KEY} from "../helpers/constants.js";

let spotifyURL = "https://api.spotify.com/v1/";

function battleFunc(){
  let artist1Name = artist1.value;
  let artist2Name = artist2.value;

  const {access_token, state} = getHashParams();

  let artist1Arr = [];

  //review ajax and https://developer.spotify.com/console/get-search-item/

  fetch(spotifyURL + "search?query=" + artist1Name)
  .then(res => res.json())
  .then(data => console.log(data));



}