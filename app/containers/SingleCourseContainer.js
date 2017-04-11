import React from 'react'
import { connect } from 'react-redux'
import SingleCourse from '../components/SingleCourse'

const mapStateToProps = state => {
  return {
    course: state.courses.selected,
    students: state.students.courseStudents
  }
}

const SingleCourseContainer = connect(mapStateToProps)(SingleCourse)

export default SingleCourseContainer
