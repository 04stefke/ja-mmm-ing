import React, { Component } from 'react'
import './Playlist.css'
import Tracklist from '../Tracklist/Tracklist'
export default class Playlist extends Component {
  constructor(props){
    super(props)
    this.handleSave = this.handleSave.bind(this)
  }

  handleSave(event){
    this.props.onNameChange(event.target.value)
  }

  render() {
    return (
      <div className='playlist-bar'>
        <input 
        defaultValue={'New Playlist'}
        className='playlist-input' 
        onChange={this.handleSave}
        ></input>
        <Tracklist
        tracks={this.props.playlistTracks}
        onRemove={this.props.onRemove}
        isRemoval={true}
        ></Tracklist>
        <button className='save-to' onClick={this.props.onSave} >Save To Spotify</button>
      </div>
    )
  }
}
