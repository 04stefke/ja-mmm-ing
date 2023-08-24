import React, { Component } from 'react'
import './SearchBar.css'
export default class SearchBar extends Component {
  render() {
    return (
      <div className='search-bar'>
        <input className='search-input' placeholder='Search'></input>
        <button className='search-button'>Search</button>
      </div>
    ) 
  }
}


