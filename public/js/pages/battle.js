import SpotifyAPI from "../api/spotify.js";
import {getHashParams} from "../helpers/url.js";
import {STATE_KEY} from "../helpers/constants.js";

const {access_token, state} = getHashParams();
const storedState = localStorage.getItem(STATE_KEY);
const ARTIST_PROFILE = document.getElementById("artist-profile");

document.getElementById("myBtn").addEventListener("click", battleFunc); 

function battleFunc() {

    const outputTemplate2 = ({artists:{items:[{images, name, popularity, type, genres }]}}) =>
      `</div>
        <dl>
        <dt>Photo: </dt><dd><img src=${images[0].url} width="200px" height="200px"></img></dd>
          <dt>Name: </dt><dd>${name}</dd>
          <dt>Popularity: </dt><dd>${popularity}</dd>
          <dt>Type: </dt><dd>${type}</dd>
          <dt>Genres: </dt><dd>${genres}</dd>
        </dl>
      </div>
    </div>`
  
    if (!access_token || (state == null || state !== storedState)) {
      window.location = "/";
    } else {
      SpotifyAPI.getArtist(access_token).then(response => {
        ARTIST_PROFILE.innerHTML = outputTemplate2(response);
      });
  
    }
  }
