import React, { Component } from 'react'
import data from '../data/movies-data'
import MovieCardContainer from '../components/Movie-card-container'
import NameSearch from '../components/nameSearch'
import RatingFilter from '../components/rating-filter'
import AddModal from '../components/Modal'

export default class MoviePage extends Component {
    state={
        data,
        rating:0,
        movieName:""
    }
         getInput = (input) =>{
            this.setState({
                movieName: input
            })
        }
        getRating =(inputRating) =>{
            this.setState ({
                rating: inputRating
            })
        }
        addParent =(name,url,star) =>{
            this.setState({
                data:[...this.state.data, {name:name, img:url, star: star}]
            })
        }
        render() {
        const searchInput = this.state.data.filter(movie =>
            movie.star >= this.state.rating &&
             movie.name.toLowerCase().includes(this.state.movieName.toLocaleLowerCase())
            
            )


            return (
            
            <div>
                <AddModal add={this.addParent} />
                <RatingFilter count={this.state.rating} change={this.getRating}/>
                <NameSearch search={this.getInput} />
                <MovieCardContainer movies={searchInput} />
            </div>
            )
    }
}

