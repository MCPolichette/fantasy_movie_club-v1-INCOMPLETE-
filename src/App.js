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





// movie IDs below for testing:
// const blackPantherId = "tt1825683";
const captainMarvelId = "tt4154664";

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=e06fa2f6
function loadMovie(id) {

  let queryURL = ("http://www.omdbapi.com/?i=" + captainMarvelId + "&apikey=" + OMDB_Api)
  // let queryURL = ("http://www.omdbapi.com/?t=" + "Lego movie" + "&apikey=" + OMDB_Api)
  axios.get(queryURL,
  ).then(function (response) {
    let results = response.data
    console.log(results)
  })
};


class App extends Component {
state = {
  movies: movieIds.data,
  teams: [],
  graphData:[],
}
// a shuffling function for movies.
shuffleMovies(){
  let graphData=[];
  let movies =[].concat(this.state.movies)
  for (let i = movies.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [movies[i], movies[j]] = [movies[j], movies[i]];
    let x={title: movies[i].title, data:[[i, movies[i].boxOffice]]}
    graphData.push(x)
  } 
  console.log(this.state.graphData)
  this.setState({movies, graphData})
}
componentDidMount(){
  this.shuffleMovies();
  console.log(this.state.movies)
 
  // for Each Team, Run API for Each Movie On their list, and push data to an array for that team.
  // 

  // for each movie in the array, build a dataset for the graph.
  
}

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <MovieButton /> */}
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
      series={{type:'bar'}}
      axes={[
        { primary: true, type: "linear", position: "bottom" },
        { type: "linear", position: "left" }
      ]}
    />
  </div>

          <button
            id="testButton"
            onClick={() => loadMovie("ID")}
          >TEST BUTTON
          </button>
          <button
            id="testButton"
            onClick={() => this.shuffleMovies()}
          >ShuffleMovies
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
