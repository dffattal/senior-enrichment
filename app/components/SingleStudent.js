import React from 'react'
import { Link } from 'react-router'

export default function SingleStudent (props) {
  console.log(props.student)
  let student = props.student
  let campus = props.student.campus
  let courses = props.student.courses
  return (
    student.id ?
    <div>
      <h2>{student.name}</h2>
      <h4>{student.email}</h4>
      <h4>Campus: <Link to={`/campus/${campus.id}`}>{campus.name}</Link>.</h4>
      <p>~A description goes here!~</p>
      <Link to={`/student/${student.id}/edit`}><button className="btn btn-primary">Edit this student</button></Link>
      <hr />
      <h4>Courses:
        {courses && courses.map(course => (
          <div className="row col-lg-12" key={ course.id }>
            <h4><Link to={`/course/${course.id}`}>{ course.code }</Link> - { course.name }</h4>
          </div>
        ))}
      </h4>
    </div> :
    <h3>Student not found!</h3>
  )
}
