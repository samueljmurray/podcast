import { ADD_PODCAST } from '../constants/ActionTypes'

const initialState = [
  {
    text: 'JSJ',
    subscribed: false,
    id: 0
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_PODCAST:
      return [
        {
          id: state.reduce((maxId, podcast) => Math.max(podcast.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }, 
        ...state
      ]

    default:
      return state
  }
}