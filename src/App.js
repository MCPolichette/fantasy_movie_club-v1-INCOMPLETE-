import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import key from "./keys.json";
import { timingSafeEqual } from 'crypto';
import axios from 'axios'

const OMDB_Api = key.OMDB_API.key;
// movie IDs below for testing:
const blackPantherId = "tt1825683";
const captainMarvelId = "tt4154664";

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=e06fa2f6
function loadMovie(id) {

  let queryURL = ("http://www.omdbapi.com/?i=" + captainMarvelId + "&apikey=" + OMDB_Api)
  axios.get(queryURL,
  ).then(function (response) {
    let results = response.data
    console.log(results)
  })
};
class App extends Component {


  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button
            id="testButton"
            onClick={() => loadMovie("ID")}
          >TEST BUTTON
          </button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div >
    );
  }
}

export default App;
