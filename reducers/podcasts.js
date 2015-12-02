import { ADD_PODCAST } from '../constants/ActionTypes'
const moment = require('moment')

const initialState = []

export default function podcasts(state = initialState, action) {
  switch (action.type) {
    case ADD_PODCAST:
      return [
        {
          id: state.reduce((maxId, podcast) => Math.max(podcast.id, maxId), -1) + 1,
          completed: false,
          get text() { return `${action.text} ${this.id}` },
          dateAdded: moment.utc().format()
        }, 
        ...state
      ]

    default:
      return state
  }
}