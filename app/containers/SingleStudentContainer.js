import React from 'react'
import { connect } from 'react-redux'
import SingleStudent from '../components/SingleStudent'

const mapStateToProps = state => {
  return {
    student: state.students.selected
  }
}

const SingleStudentContainer = connect(mapStateToProps)(SingleStudent)

export default SingleStudentContainer
