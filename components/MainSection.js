import React, { Component, PropTypes } from 'react'

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { podcasts, actions } = this.props
    return (
      <main>
        <ol>
          {
            podcasts.map((podcast) => {
              return <li key={podcast.id}>{podcast.text}</li>
            })
          }
        </ol>
      </main>
    )
  }
}

MainSection.propTypes = {
  podcasts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection