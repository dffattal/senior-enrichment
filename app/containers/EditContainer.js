import React from 'react'
import { connect } from 'react-redux'
import Edit from '../components/Edit'

const mapStateToProps = state => {
  return {
    thingToEdit: state.edit.thingToEdit,
    campuses: state.campuses.list,
    courses: state.courses.list,
    instructors: state.instructors.list,
    students: state.students.list,
    nameInput: '',
    locationInput: '',
    codeInput: '',
    emailInput: ''
  }
}

const EditContainer = connect(mapStateToProps)(Edit)

export default EditContainer
