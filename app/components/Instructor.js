import React from 'react'
import { Link } from 'react-router'

export default function Instructor (props) {
  return (
    <div>
      <h2>Instructors</h2>
        {
          props.instructors.list && props.instructors.list.map(instructor => (
          <div className="row col-lg-12" key={ instructor.id }>
            <h4>
              <p><Link to={`/instructor/${instructor.id}`}>{ instructor.name }</Link></p>
            </h4>
          </div>
          ))
        }
    </div>
  )
}
