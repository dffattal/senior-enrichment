import React from 'react'
import { connect } from 'react-redux'
import Instructor from '../components/Instructor'

const mapStateToProps = state => {
  return {
    instructors: state.instructors
  }
}

const InstructorContainer = connect(mapStateToProps)(Instructor)

export default InstructorContainer
