import { combineReducers } from 'redux'
import campuses from './campuses-reducer'
import courses from './courses-reducer'
import instructors from './instructors-reducer'
import students from './students-reducer'

export default combineReducers({
  campuses,
  courses,
  instructors,
  students
})
