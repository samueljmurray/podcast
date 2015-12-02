import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as PodcastActions from '../actions/podcasts'

class App extends Component {
  render() {
    const { podcasts, actions } = this.props
    return (
      <div>
        <Header addPodcast={actions.addPodcast} />
        <MainSection podcasts={podcasts} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  podcasts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    podcasts: state.podcasts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PodcastActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)