import React from 'react'
import { Link } from 'react-router'

export default function SingleCourse (props) {
  let course = props.course
  let campus = props.course.campus
  let instructor = props.course.instructor
  let students = props.students
  return (
    course.id ?
    <div>
      <h2>{course.name}</h2>
      <h4>{course.code}</h4>
      <h4>Campus: <Link to={`/campus/${campus.id}`}>{campus.name}</Link>.</h4>
      <h4>Instructor: <Link to={`/instructor/${instructor.id}`}>{instructor.name}</Link>.</h4>
      <p>~A description goes here!~</p>
      <Link to={`/course/${course.id}/edit`}><button className="btn btn-primary">Edit this course</button></Link>
      <hr />
      <h4>Students:
        {students && students.map(student => (
          <div className="row col-lg-12" key={ student.id }>
            <h4><Link to={`/student/${student.id}`}>{ student.name }</Link></h4>
          </div>
        ))}
      </h4>
    </div> :
    <h3>Course not found!</h3>
  )
}
