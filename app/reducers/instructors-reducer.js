import { SET_INSTRUCTORS, SET_INSTRUCTOR } from '../action-creators/instructors'

const initialInstructorsState = {
  list: [],
  selected: {}
}

export default function (state = initialInstructorsState, action) {
  const newState = Object.assign({}, state)

  switch (action.type) {

    case SET_INSTRUCTORS:
      newState.list = action.list
      break;

    case SET_INSTRUCTOR:
      newState.selected = action.selected
      break;

    default:
      return state

  }
  return newState
}
