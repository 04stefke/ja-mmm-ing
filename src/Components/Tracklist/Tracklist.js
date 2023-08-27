import React, { Component } from 'react'
import './Tracklist.css'
import Track from '../Track/Track'
export default class Tracklist extends Component {
  render() {
    return (
      <div className="tracklistt">
        {this.props.tracks.map((track) => {
          return (
            <Track
              track={track}
              key={track.id}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
              isRemoval={this.props.isRemoval}
            />
          );
        })}
      </div>
    )
  }
}
