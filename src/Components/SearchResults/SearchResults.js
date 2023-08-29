import React, { Component } from 'react'
import Tracklist from '../Tracklist/Tracklist'
import './SearchResults.css'

export default class SearchResults extends Component {
  render() {
    return (
      <div className='results'>
        <h3 className='h3'>Results</h3>
        <Tracklist 
        tracks={this.props.searchResults}
        onAdd={this.props.onAdd}
        isRemoval={false}
        ></Tracklist>
      </div>
    )
  }
}
