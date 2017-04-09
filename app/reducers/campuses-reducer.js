import { SET_CAMPUSES, SET_CAMPUS } from '../action-creators/campuses'

const initialCampusesState = {
  list: [],
  selected: {}
}

export default function (state = initialCampusesState, action) {
  const newState = Object.assign({}, state)

  switch (action.type) {

    case SET_CAMPUSES:
      newState.list = action.list
      break;

    case SET_CAMPUS:
      newState.selected = action.selected
      break;

    default:
      return state

  }
  return newState
}
