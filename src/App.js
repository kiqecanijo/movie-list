import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import styled from 'styled-components'

const ListItems = styled.div`
  display: table-cell;
  vertical-align: bottom;
`

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
        .get(
          `${requestURl}${type}?api_key=${apiKey}&page=15&language=en-US&page=1`
        )
        .then(res => this.setState({ [type]: res.data.results }))
        .catch(error => console.log('an error ocurred 😞'))
    )
  }

  render() {
    const { baseImg, size, image, types } = this.state
    return (
      <div className="App">
        <header className="App-header">
          {types.map(type => ({ type, list: this.state[type] })).map(el => (
            <div>
              <h2>{el.type}:</h2>
              {el.list && console.log(el.list)}
              {el.list &&
                el.list.map(movie => (
                  <ListItems>
                    <p>{movie.title}</p>
                    <img
                      onMouseOver={event => console.log(event.target.src)}
                      src={`${baseImg}${size}${movie.poster_path}`}
                    />
                  </ListItems>
                ))}
            </div>
          ))}
        </header>
      </div>
    )
  }
}
export default App
