import React from 'react'
import { connect } from 'react-redux'
import Campus from '../components/Campus'

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  }
}

const CampusContainer = connect(mapStateToProps)(Campus)

export default CampusContainer
