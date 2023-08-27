import React, { Component } from 'react'
import './Track.css'

export default class Track extends Component {
  constructor(props){
    super(props)
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
  }
  renderAction(){
      if(this.props.isRemoval){
        return(
          <button className='button-action' onClick={this.removeTrack}>-</button>)
      } else {
        return(
          <button className='button-action' onClick={this.addTrack}>+</button>
      )}
  }

  addTrack(){
    this.props.onAdd(this.props.track)
  }

  removeTrack(){
    this.props.onRemove(this.props.track)
  }

  render() {
    return (
      <div className='track'>
        <div className='track-info'>
            <h3 className='track-name'>{this.props.track.name}</h3>
            <p className='track-a'> {this.props.track.artist} | {this.props.track.album}</p>
        </div>
            {this.renderAction()}
      </div>
    )
  }
}
