import React from 'react'
import { connect } from 'react-redux'
import Course from '../components/Course'

const mapStateToProps = state => {
  return {
    courses: state.courses
  }
}

const CourseContainer = connect(mapStateToProps)(Course)

export default CourseContainer
