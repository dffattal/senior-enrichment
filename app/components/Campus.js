import React from 'react'
import { Link } from 'react-router'

export default function Campus (props) {
  return (
    <div>
      <h2>Campuses</h2>
      <div className="row">
        {
          props.campuses.list && props.campuses.list.map(campus => (
            <div className="col-xs-2" key={ campus.id }>
              <h3>
                <span><Link to={`/campus/${campus.id}`}>{ campus.name }</Link></span>
              </h3>
              <h5>{ campus.location }</h5>
            </div>
          ))
        }
      </div>
    </div>
  )
}
