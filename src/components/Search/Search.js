import React, { useState, useEffect } from 'react';
import axios from "axios";
import Card from '../Card/Card.js'
import './search.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Search() {

    const [moviesList, setmoviesList] = useState([]);
    const [searchQuery, setsearchQuery] = useState('');
   
    const apiKey = process.env.REACT_APP_API_KEY;
    const MovieUrl = process.env.REACT_APP_MOVIE_DB_API;

    const apiUrl = `${MovieUrl}/discover/movie?with_keywords=9882&&with_genres=18&&api_key=${apiKey}&sort_by=popularity.desc`;

    const apiSearchUrl = `${MovieUrl}/search/movie?&api_key=${apiKey}&query=${searchQuery}`;


    function searchQueryFun(e) {
        setsearchQuery(e.target.value);
    }

    useEffect(() => {

        (async () => {
            const apiData = await axios.get(apiUrl);
            const request = apiData.data.results;
            setmoviesList(request);
        })();

    }, []);
    console.log(moviesList)


    useEffect(() => {


        (async () => {
            const apiSearchData = await axios.get(apiSearchUrl);
            const request = apiSearchData.data.results;
            setmoviesList(request);
        })();


    }, [searchQuery]);

    console.log(searchQuery)
    console.log(moviesList)

    return (
        <>
            <div id='searchEngine'>
                <h2 id='h2Search'>Movie Search</h2>
                <input
                    onChange={(e) => {
                        searchQueryFun(e);
                    }}
                    type="text"
                    id="searchQuery"
                    name="searchQuery"
                    placeholder='search...'
                />
            </div>

            <div id='cardContainer'>
                <Card
                    moviesList={moviesList}
                />
            </div>

        </>
    )
}

export default Search
