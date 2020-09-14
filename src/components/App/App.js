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

      spotify.getMe().then(user => {

        dispatch({
          type: 'SET_USER',
          user,
        });
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