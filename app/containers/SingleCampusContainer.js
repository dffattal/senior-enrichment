import React from 'react'
import { connect } from 'react-redux'
import SingleCampus from '../components/SingleCampus'

const mapStateToProps = state => {
  return {
    campus: state.campuses.selected,
    courses: state.courses.list,
    instructors: state.instructors.list,
    students: state.students.list
  }
}

const SingleCampusContainer = connect(mapStateToProps)(SingleCampus)

export default SingleCampusContainer
