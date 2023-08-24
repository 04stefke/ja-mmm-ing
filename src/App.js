import React from 'react'
import './App.css'
import SearchBar from './Components/SearchBar/SearchBar'
import SearchResults from './Components/SearchResults/SearchResults'
import Playlist from './Components/Playlist/Playlist'


export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='top-bar'>
          <h1>Ja<span className='highlight'>mmm</span>ing</h1>
        </div>
        <div className='middle'>
          <SearchBar/>
        </div>
        <div className='results-bar'>
          <SearchResults/>
        </div>
        <div className='bar-playlist'>
          <Playlist></Playlist>
        </div>
        
      </div>
    )
  }
}

