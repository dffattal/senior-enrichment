import React from 'react'
import { connect } from 'react-redux'
import Student from '../components/Student'

const mapStateToProps = state => {
  return {
    students: state.students
  }
}

const StudentContainer = connect(mapStateToProps)(Student)

export default StudentContainer
