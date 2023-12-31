import React, { Component } from 'react'
import './SearchBar.css'
export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      term: ''
    }
    this.search = this.search.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this)
  }

  search(){
    this.props.onSearch(this.state.term)
  }

  handleTermChange(event){
    this.setState({term: event.target.value })
  }

  render() {
    return (
      <div className='search-bar'>
        <input className='search-input' placeholder='Search' onChange={this.handleTermChange} ></input>
        <button className='search-button' onClick={this.search}>Search</button>
      </div>
    ) 
  }
}


