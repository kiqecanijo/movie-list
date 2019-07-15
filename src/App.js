import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import styled from 'styled-components'

class App extends Component {
  state = {
    baseImg: 'http://image.tmdb.org/t/p/w',
    size: 185,
    types: ['now_playing', 'upcoming'],
    requestURl: 'https://api.themoviedb.org/3/movie/',
    apiKey: 'd5bb4eb5d2560e009f6f873d49bc8493'
  }

  componentWillMount() {
    const { requestURl, apiKey, types } = this.state
    types.map(type =>
      axios
        .get(`${requestURl}${type}?api_key=${apiKey}&language=en-US&page=1`)
        .then(res => this.setState({ [type]: res.data.results }))
        .catch(error => console.log('an error ocurred 😞'))
    )
  }

  render() {
    const { baseImg, size, image, types } = this.state
    return (
      <div className="App">
        <header className="App-header">
          {types.map(type => ({ type, list: this.state[type] })).map(el => {
            return (
              <div>
                <h2>{el.type}:</h2>
                {el.list && el.list.map(movie => <p>{movie.title}</p>)}
              </div>
            )
          })}
        </header>
      </div>
    )
  }
}
export default App
