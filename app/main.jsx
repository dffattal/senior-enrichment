'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import axios from 'axios'

import CampusContainer from './containers/CampusContainer'
import SingleCampusContainer from './containers/SingleCampusContainer'

import store from './store'
import Root from './components/Root'

import { setCampuses, setCampus } from './action-creators/campuses'
import { setCourses } from './action-creators/courses'
import { setInstructors } from './action-creators/instructors'
import { setStudents } from './action-creators/students'

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

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root} onEnter={onAppLoad}>
        <Route path="/campus" component={CampusContainer} />
        <Route path="/campus/:campusId" component={SingleCampusContainer} onEnter={selectCampus} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
