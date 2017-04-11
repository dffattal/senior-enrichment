import React from 'react'
import { Link } from 'react-router'

export default function SingleCourse (props) {
  let instructor = props.instructor
  let campus = props.instructor.campus
  return (
    instructor.id ?
    <div>
      <h2>{instructor.name}</h2>
      <h4>Campus: <Link to={`/campus/${campus.id}`}>{campus.name}</Link>.</h4>
      <p>~A description goes here!~</p>
      <Link to={`/instructor/${instructor.id}/edit`}><button className="btn btn-primary">Edit this instructor</button></Link>
      <hr />
    </div> :
    <h3>Instructor not found!</h3>
  )
}
