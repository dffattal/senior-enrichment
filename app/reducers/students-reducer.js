import { SET_STUDENTS, SET_STUDENT } from '../action-creators/students'

const initialStudentsState = {
  list: [],
  selected: {}
}

export default function (state = initialStudentsState, action) {
  const newState = Object.assign({}, state)

  switch (action.type) {

    case SET_STUDENTS:
      newState.list = action.list
      break;

    case SET_STUDENT:
      newState.selected = action.selected
      break;

    default:
      return state

  }
  return newState
}
