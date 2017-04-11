import React from 'react'
import { connect } from 'react-redux'
import SingleInstructor from '../components/SingleInstructor'

const mapStateToProps = state => {
  return {
    instructor: state.instructors.selected
  }
}

const SingleInstructorContainer = connect(mapStateToProps)(SingleInstructor)

export default SingleInstructorContainer
