import { setCampuses } from './action-creators/campuses'
import { setCourses } from './action-creators/courses'
import { setInstructors  } from './action-creators/instructors'
import { setStudents } from './action-creators/students'
import store from './store'
import axios from 'axios'

export function onAppLoad () {
  const pCampus = axios.get('/api/campus')
  const pCourse = axios.get('/api/course')
  const pInstructor = axios.get('/api/instructor')
  const pStudent = axios.get('/api/student')
  Promise.all([pCampus, pCourse, pInstructor, pStudent])
  .then(results => results.map(result => result.data))
  .then(([campuses, courses, instructors, students]) => {
    store.dispatch(setCampuses(campuses))
    store.dispatch(setCourses(courses))
    store.dispatch(setInstructors(instructors))
    store.dispatch(setStudents(students))
  })
  .catch(console.error)
}
