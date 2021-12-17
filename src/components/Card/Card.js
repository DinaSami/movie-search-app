import React from 'react';
import './card.css'

function Card({ moviesList }) {
    const apiImg = process.env.REACT_APP_IMAGE_BASE_PATH;
   
    return (
        <>
            {moviesList.map(ele => (

                <div id='cardChild'>

                    <a href={`/details/${ele.id}`}>
                        <img id='cardsImg' src={`${apiImg}/w200${ele.poster_path}`} alt={ele.original_title} width='190px' />
                    </a>
                    <h4 id='h4Card'>{ele.original_title}</h4>
                </div>
            ))}
        </>
    )
}

export default Card;
