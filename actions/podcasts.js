import * as types from '../constants/ActionTypes'

export function addPodcast(text) {
  return { type: types.ADD_PODCAST, text }
}