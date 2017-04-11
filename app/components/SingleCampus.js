import React from 'react'
import { Link } from 'react-router'

export default function SingleCampus (props) {
  function listCreator (modelName, dataArr) {
    let title = modelName.substring(0, 1).toUpperCase() + modelName.substring(1) + 's'
    return (
      <div className="col-lg-2">
        <h4>{title}</h4>
        <ul>
          {dataArr.map(elem => {
            if (elem.campusId === props.campus.id) {
              return <li key={elem.id}><Link to={`/${modelName}/${elem.id}`}>{elem.name}</Link></li>
            }
          })}
        </ul>
      </div>
    )
  }
  return (
    props.campus.id ?
    <div>
      <h2>{props.campus.name}</h2>
      <h3>Located in {props.campus.location}.</h3>
      <p>~A description goes here!~</p>
      <Link to={`/campus/${props.campus.id}/edit`}><button className="btn btn-primary">Edit this campus</button></Link>
      <hr />
      {listCreator('course', props.courses)}
      {listCreator('instructor', props.instructors)}
      {listCreator('student', props.students)}
    </div> :
    <h3>Campus not found!</h3>
  )
}
