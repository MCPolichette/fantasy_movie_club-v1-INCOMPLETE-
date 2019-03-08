import React, { Component } from 'react';
import key from "../keys.json";
import axios from 'axios';
import test from './moviedata.json';

// Test Data in objects for reference:
const movieObjects=test.data

const OMDB_Api = key.OMDB_API.key;
    
function loadMovie(id) {

        let queryURL = ("http://www.omdbapi.com/?i=" + id + "&apikey=" + OMDB_Api)
        axios.get(queryURL,
        ).then(function (response) {
            let results = response.data
            console.log(results.Title)
            newState()
        })
    };
 function newState(text) {
    console.log(movieObjects)
}
class MovieButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: "nothing",
        }
    }
    
 
    render(){
        return (
   <div>
        <button
            id="testButton"
            onClick={() => loadMovie("tt0437086")}>
            TESTING THURSDAY
        </button><button
            id="testButton2"
            onClick={() => newState()}>
            changetext
        </button>
        <h1>{this.state.x}</h1>
</div>
    )

}}
export default MovieButton;