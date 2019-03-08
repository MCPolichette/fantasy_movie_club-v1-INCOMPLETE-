import React from 'react';
import key from "../keys.json";
import axios from 'axios';
function loadMovie(id) {

        let queryURL = ("http://www.omdbapi.com/?i=" + id + "&apikey=" + OMDB_Api)
        axios.get(queryURL,
        ).then(function (response) {
            let results = response.data
            console.log(results)
            this.setState(test: results)
        })
    };
export default {
    state={
        test: {};
    }
    
   <div
        <button
            id="testButton"
            onClick={() => loadMovie("tt0437086")}>
            "XXXXXXXXXXXXXXXXX"
        </button>

    

}