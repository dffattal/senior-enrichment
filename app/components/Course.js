import React from 'react'
import { Link } from 'react-router'

export default function Campus (props) {
  return (
    <div>
      <h2>Courses</h2>
        {
          props.courses.list && props.courses.list.map(course => (
          <div className="row col-lg-12" key={ course.id }>
            <h4><Link to={`/course/${course.id}`}>{ course.code }</Link> - { course.name }</h4>
          </div>
          ))
        }
    </div>
  )
}
