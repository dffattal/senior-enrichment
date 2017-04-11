import { SET_STUDENTS, SET_STUDENT, SET_STUDENTS_IN_COURSE } from '../action-creators/students'

const initialStudentsState = {
  list: [],
  selected: {},
  courseStudents: []
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

    case SET_STUDENTS_IN_COURSE:
      newState.courseStudents = action.courseStudents
      break;

    default:
      return state

  }
  return newState
}
