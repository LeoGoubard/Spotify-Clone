import React, { useEffect } from 'react';

import Login from '../Login/Login';
import Player from '../Player/Player';
import { useStateProviderValue } from "../../StateProvider";


import './App.css';
import { getTokenFromUrl } from '../../spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateProviderValue();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    
    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {

        dispatch({
          type: 'SET_USER',
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      spotify.getPlaylist("6yIL2LE2Cu4ipAiyEm7Az9").then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
      );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify,
      });
    }

    // console.log(token);
  }, []);


  return (
    <div className="app">
      {
        token ? (
        <Player spotify={spotify} />
        ) :(
          <Login />
        )
      }
    </div>
  );
}

export default App;