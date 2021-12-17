import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import './FilmPage.css'


function FilmPage() {
    let selectedMovieId = useParams();
    const [selectedMovieData, setselectedMovieData] = useState([]);

    const apiKey = process.env.REACT_APP_API_KEY;
    const MovieUrl = process.env.REACT_APP_MOVIE_DB_API;
    const apiImg = process.env.REACT_APP_IMAGE_BASE_PATH;
 
    useEffect(() => {

        (async () => {
            const apiMovieDetails = `${MovieUrl}/movie/${selectedMovieId.id}?&api_key=${apiKey}`;
            const requestMovie = await axios.get(apiMovieDetails);
            const fullData = requestMovie.data
            setselectedMovieData(fullData);
        })();

    }, [])
    console.log(selectedMovieData);
    return (
        <div id='movieContainer'>
            <div id='leftSide'>
                <img id='movieImg' src={`${apiImg}/w500${selectedMovieData.poster_path}`} alt={selectedMovieData.original_title} height='500px' />
            </div>

            <div id='rightSide'>

                <div id='section1'>
                    <h2>{selectedMovieData.original_title}</h2>
                    <p id='releaseDate'>{selectedMovieData.release_date}</p>
                    <h6>popularity for movie {selectedMovieData.popularity}</h6>
                </div>

                <div id='section2'>
                    <p>{selectedMovieData.overview}</p>
                </div>

                <div id='section3'>
                    <div id='subSection1'>
                        <h3>original_language : </h3>
                        <h3>status : </h3>
                        <h3>tagline : </h3>
                    </div>

                    <div id='subSection2'>
                        <h3>{selectedMovieData.original_language}</h3>
                        <h3>{selectedMovieData.status}</h3>
                        <h3>{selectedMovieData.tagline}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmPage
