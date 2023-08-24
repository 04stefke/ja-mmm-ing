import React, { Component } from 'react'
import Track from '../Track/Track'
import './Playlist.css'
export default class Playlist extends Component {
  render() {
    return (
      <div className='playlist-bar'>
        <input placeholder='New Playlist' className='playlist-input'></input>
        <Track></Track>
        <button className='save-to'>Save To Spotify</button>
      </div>
    )
  }
}
