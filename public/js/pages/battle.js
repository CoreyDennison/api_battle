import SpotifyAPI from "../api/spotify.js";
import {getHashParams} from "../helpers/url.js";
import {STATE_KEY} from "../helpers/constants.js";

const {access_token, state} = getHashParams();
const storedState = localStorage.getItem(STATE_KEY);
const ARTIST_PROFILE = document.getElementById("artist-profile");
const ARTIST_PROFILE2 = document.getElementById("artist-profile2");

document.getElementById("myBtn").addEventListener("click", battleFunc); 

function battleFunc() {
    //artist 1 template
    const outputTemplate = ({artists:{items:[{images, name, popularity, followers, type, genres }]}}) =>
      `</div>
          <h2>${name}</h2>
          <img src=${images[0].url} width="200px" height="200px"></img>
          <p>Popularity: ${popularity}</p>
          <p>Followers: ${followers.total}</p>
          <p>Type: ${type}</p>
          <p>Genres: ${genres}</p>
      </div>
    </div>`
  
    if (!access_token || (state == null || state !== storedState)) {
      window.location = "/";
    } else {
      SpotifyAPI.getArtist(access_token).then(response => {
        ARTIST_PROFILE.innerHTML = outputTemplate(response);
      });
  
    }

    // artist 2 template
    const outputTemplate2 = ({artists:{items:[{images, name, popularity, followers, type, genres }]}}) =>
      `</div>
          <h2>${name}</h2>
          <img src=${images[0].url} width="200px" height="200px"></img>
          <p>Popularity: ${popularity}</p>
          <p>Followers: ${followers.total}</p>
          <p>Type: ${type}</p>
          <p>Genres: ${genres}</p>
      </div>
    </div>`
  
    if (!access_token || (state == null || state !== storedState)) {
      window.location = "/";
    } else {
      SpotifyAPI.getArtist2(access_token).then(response => {
        ARTIST_PROFILE2.innerHTML = outputTemplate2(response);
      });
  
    }

}

