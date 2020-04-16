import React, { Component } from 'react'
import './App.css';
import MoviePage from './pages/MoviePage'
import Spinner from './components/Spinner'




export default class App extends Component {

  state = {
    isLoading: true
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({
          isLoading: !this.state.isLoading
        })
      }, 3000
    )
    
  }


  render() {
    return (
      <div className="App" >
        {
          this.state.isLoading ? <Spinner /> : <MoviePage />
        }
      </div>
    )
  }
}
