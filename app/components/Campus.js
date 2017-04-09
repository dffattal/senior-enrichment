import React from 'react'
import { Link } from 'react-router'

export default function Campus (props) {
  return (
    <div>
      <h3>Campuses</h3>
      <div className="row">
        {
          props.campuses.list && props.campuses.list.map(campus => (
            <div className="col-xs-4" key={ campus.id }>
              <h5>
                <span><Link to={`/campus/${campus.id}`}>{ campus.name }</Link></span>
              </h5>
              <small>{ campus.location }</small>
            </div>
          ))
        }
      </div>
    </div>
  )
}
