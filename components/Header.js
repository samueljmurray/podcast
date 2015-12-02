import React, { PropTypes, Component } from 'react'

class Header extends Component {
  handleClick() {
    this.props.addPodcast('New podcast')
  }

  render() {
    return (
      <header>
        <h1>Podcast</h1>
        <button onClick={this.handleClick.bind(this)}>
          Add podcast
        </button>
      </header>
    )
  }
}

export default Header