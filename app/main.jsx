'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import axios from 'axios'

import CampusContainer from './containers/CampusContainer'
import SingleCampusContainer from './containers/SingleCampusContainer'
import CourseContainer from './containers/CourseContainer'
import SingleCourseContainer from './containers/SingleCourseContainer'
import InstructorContainer from './containers/InstructorContainer'
import SingleInstructorContainer from './containers/SingleInstructorContainer'
import StudentContainer from './containers/StudentContainer'
import SingleStudentContainer from './containers/SingleStudentContainer'

import store from './store'
import Root from './components/Root'

import { setCampuses, setCampus } from './action-creators/campuses'
import { setCourses, setCourse } from './action-creators/courses'
import { setInstructors, setInstructor } from './action-creators/instructors'
import { setStudents, setStudent, setStudentsInCourse } from './action-creators/students'

function onAppLoad () {
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

function selectCampus (nextState) {
  let campusId = nextState.params.campusId
  axios.get(`/api/campus/${campusId}`)
  .then(response => response.data)
  .then(campus => {
    store.dispatch(setCampus(campus))
  })
  .catch(console.error)
}

function selectCourse (nextState) {
  let courseId = nextState.params.courseId
  axios.get(`/api/course/${courseId}`)
  .then(response => response.data)
  .then(course => {
    store.dispatch(setCourse(course))
  })
  .then(function () {
    return axios.get(`/api/student/course/${courseId}`)
  })
  .then(response => response.data)
  .then(courseStudents => {
    store.dispatch(setStudentsInCourse(courseStudents))
  })
  .catch(console.error)
}

function selectInstructor (nextState) {
  let instructorId = nextState.params.instructorId
  axios.get(`/api/instructor/${instructorId}`)
  .then(response => response.data)
  .then(instructor => {
    store.dispatch(setInstructor(instructor))
  })
  .catch(console.error)
}

function selectStudent(nextState) {
  let studentId = nextState.params.studentId
  axios.get(`/api/student/${studentId}`)
  .then(response => response.data)
  .then(student => {
    store.dispatch(setStudent(student))
  })
  .catch(console.error)
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root} onEnter={onAppLoad}>
        <Route path="/campus" component={CampusContainer} />
        <Route path="/campus/:campusId" component={SingleCampusContainer} onEnter={selectCampus} />
        <Route path="/course" component={CourseContainer} />
        <Route path="/course/:courseId" component={SingleCourseContainer} onEnter={selectCourse} />
        <Route path="/instructor" component={InstructorContainer} />
        <Route path="/instructor/:instructorId" component={SingleInstructorContainer} onEnter={selectInstructor} />
        <Route path="/student" component={StudentContainer} />
        <Route path="/student/:studentId" component={SingleStudentContainer} onEnter={selectStudent} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
