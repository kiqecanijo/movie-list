import React, { Component } from 'react'
import styled from 'styled-components'

const HorizontalDiv = styled.div`
  overflow: auto;
  overflow-y: hidden;
  max-width: 100%;
`
const ListItems = styled.div`
  display: table-cell;
  vertical-align: top;
  padding: 5px;
  font-weight: lighter;
  font-size: 3vh;
  text-shadow: white 0px 0px 3px;
`

class Horizontal extends Component {
  render() {
    const { el, baseImg, size } = this.props
    return (
      <HorizontalDiv>
        <h2>{el.type}:</h2>
        {el.list &&
          el.list.filter(movie => movie.poster_path).map(movie => (
            <ListItems>
              {movie.poster_path && (
                <img
                  onMouseOver={event => console.log(event.target.src)}
                  src={`${baseImg}${size}${movie.poster_path}`}
                />
              )}
              <p>{movie.title}</p>
            </ListItems>
          ))}
      </HorizontalDiv>
    )
  }
}
export default Horizontal
