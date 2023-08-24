import React, { Component } from 'react'
import './Track.css'

export default class Track extends Component {
    renderAction(){
        if(this.props.isRemoval){
            <button className='button-action'>-</button>
        } else {
            <button className='button-action'>+</button>
        }
    }
  render() {
    return (
      <div className='track'>
        <div className='track-info'>
            <h3 className='track-name'>Name</h3>
            <p className='track-a'>Artist!Album</p>
        </div>
            {this.renderAction()}
      </div>
    )
  }
}
