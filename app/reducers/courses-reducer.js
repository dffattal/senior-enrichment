import { SET_COURSES, SET_COURSE } from '../action-creators/courses'

const initialCoursesState = {
  list: [],
  selected: {}
}

export default function (state = initialCoursesState, action) {
  const newState = Object.assign({}, state)

  switch (action.type) {

    case SET_COURSES:
      newState.list = action.list
      break;

    case SET_COURSE:
      newState.selected = action.selected
      break;

    default:
      return state

  }
  return newState
}
