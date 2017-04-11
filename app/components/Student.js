import React from 'react'
import { Link } from 'react-router'

export default function Student (props) {
  return (
    <div>
      <h2>Students</h2>
        {
          props.students.list && props.students.list.map(student => (
          <div className="row col-lg-12" key={ student.id }>
            <h4>
              <p><Link to={`/student/${student.id}`}>{ student.name }</Link></p>
            </h4>
          </div>
          ))
        }
    </div>
  )
}
