import React from 'react';
import key from "../keys.json";
import axios from 'axios';

export const movieButton = props => {
    const OMDB_Api = key.OMDB_API.key;
    props = this.props;
    function loadMovie(id) {

        let queryURL = ("http://www.omdbapi.com/?i=" + id + "&apikey=" + OMDB_Api)
        axios.get(queryURL,
        ).then(function (response) {
            let results = response.data
            console.log(results)
        })
    };

    return (
        <button
            id="testButton"
            onClick={() => loadMovie(props.id)}
        >{props.title} + XXXXXXXXXXXXXX
        </button>

    )

}