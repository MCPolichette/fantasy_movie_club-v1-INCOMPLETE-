import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamGraph from './components/TeamGraph';
import MovieGraph from './components/MovieGraph';
import MovieButton from './components/MovieButton'
import key from "./keys.json";
import { timingSafeEqual } from 'crypto';
import axios from 'axios'
import movieIds from './components/moviedata.json'
import { Chart } from "react-charts";
const OMDB_Api = key.OMDB_API.key;

var request = require('request');
var cheerio = require('cheerio');

// movie IDs below for testing:
// const blackPantherId = "tt1825683";
const captainMarvelId = "tt4154664";

// RAW DATA from the draft
const teams = [
  {
    name: "Petunia",
    movies: [
      "tt5461944", //Hotel Mumvai
      "tt6320628", //Spiderman far from home
      "tt3861390", //Dumbo
    ]
  },
  {
    name: "Simba",
    movies: [
      "tt4154664" //Captain Marvel
    ]
  },
  {
    name: "They Might Be Winners",
    movies: [
      "tt6857112", //Us
      "tt2386490" //How to train your dragon.  TEST
    ]
  }
];
// Another Test Array:
const testArray = [
  "tt5461944", //Hotel Mumvai
  "tt6320628", //Spiderman far from home
  "tt3861390", //Dumbo
  "tt4154664", //Captain Marvel
  "tt6857112", //Us
  "tt2386490" //How to train your dragon.  TEST
]
function runTest() {
  testArray.forEach(this.loadMovie())
  console.log("DONE")
};
function loadMovie(IMDB_Id) {
  let queryURL = ("http://www.omdbapi.com/?i=" + IMDB_Id + "&apikey=" + OMDB_Api)
  axios.get(queryURL,
  ).then(function (response) {
    let results = response.data
    console.log(results)
    return (results)
  })
};
function IMDBScraper(x){
  request('https://www.imdb.com/title/'+x, function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('h4.inline:contains("Gross USA:")').each(function (i, element) {
            var a = $(this)
            console.log(a.parent().text())
        })
    }
});
}

class App extends Component {
  state = {
    moviesLoaded: false,
    movies: movieIds.data,
    graphData: [],
    movieArray: [],
    teamArray: []
  }
  // a shuffling function for movies.
  shuffleMovies() {
    let graphData = [];
    let movies = [].concat(this.state.movies)
    for (let i = movies.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [movies[i], movies[j]] = [movies[j], movies[i]];
      let x = { title: movies[i].title, data: [[i, movies[i].boxOffice]] }
      graphData.push(x)
    }
    console.log(this.state.graphData)
    this.setState({ movies, graphData })
  };
  testing() {
   IMDBScraper("tt2386490")
  }

  runAPI() {
    // Define the Arrays 

    let tempMovieArray = [];
    let tempTeamArray = [];
    let thisMovie = {}
    for (let i = 0; i < teams.length; i++) {
      let thisTeam = {
        name: teams[i].name,
        movies: []
      }
      for (let j = 0; j < teams[i].movies.length; j++) {
        let thisMovie = teams[i].movies[j];
        loadMovie = (IMDB_Id) => {
          let queryURL = ("http://www.omdbapi.com/?i=" + IMDB_Id + "&apikey=" + OMDB_Api)
          axios.get(queryURL,
          ).then(function (response) {
            let results = response.data
            console.log(results)
            return (results)
          })
        }
        loadMovie(thisMovie)

        // loadMovie(thisMovie).then(function (results) { console.log("PPPPPPPPPPPPP" + results) });
        // console.log("XXXXXXXXXXXXXXXXXXX" + movieObject)
        // thisTeam.movies.push(movieObject)
        // tempMovieArray.push({
        //   title: movieObject.Title,
        //   boxOffice: movieObject.BoxOffice
        // });
      };

      tempTeamArray.push(thisMovie)

    };
    this.setState({
      movieArray: tempMovieArray,
      teamArray: tempTeamArray,
      // moviesLoaded: true
    })

  }
  componentDidMount() {
    // this.shuffleMovies();
    this.testing()
    console.log("TEST" + this.state.movieArray, this.state.teamArray)
  }

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <MovieButton />
          <TeamGraph />
          {/* <MovieGraph
          data= {this.state.graphData} /> */}

          <div
            style={{
              width: "400px",
              height: "300px"
            }}
          >
            <Chart
              data={this.state.graphData}

              dark
              primaryCursor
              secondaryCursor
              tooltip
              series={{ type: 'bar' }}
              axes={[
                { primary: true, type: "linear", position: "bottom" },
                { type: "linear", position: "left" }
              ]}
            />
          </div>

          <button
            id="testButton"
            onClick={() => this.testing()}
          >TEST BUTTON
          </button>
          <button
            id="testButton"
            onClick={() => this.shuffleMovies()}
          >ShuffleMovies
          </button>

        </header>
      </div >
    );
  }
}

export default App;
