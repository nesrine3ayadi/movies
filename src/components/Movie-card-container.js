import React from 'react'
import MovieCard from './movie-card-component'

const MovieCardContainer = ({movies}) => {
    return (
        <div className="cards row">
            {movies.map(movie => <MovieCard movie={movie} />)}
        </div>
    )
}

export default MovieCardContainer;
