import React from 'react'
import Rating from './rating'

const movieCardComponent = ({ movie}) => {
    return (
      
            <div className="card col-md-4" style={{ width: '18rem' }}>
                <Rating count={movie.star}/>
                <img className="card-img-top" src={movie.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{movie.name}</h5>
                    <p className="card-text">{movie.duration}</p>
                    
                </div>
            </div>
        
    )
}

export default movieCardComponent;
