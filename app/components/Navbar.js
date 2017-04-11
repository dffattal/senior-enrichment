import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function (props) {
  const location = browserHistory.getCurrentLocation().pathname
  return (
    <div>
      <ul className="nav navbar-nav">
        <li className={location === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.slice(0, 7) === "/campus" ? "active" : ""}>
          <Link to="/campus">Campuses</Link>
        </li>
        <li className={location.slice(0, 7) === "/course" ? "active" : ""}>
          <Link to="/course">Courses</Link>
        </li>
        <li className={location.slice(0, 11) === "/instructor" ? "active" : ""}>
          <Link to="/instructor">Instructors</Link>
        </li>
        <li className={location.slice(0, 8) === "/student" ? "active" : ""}>
          <Link to="/student">Students</Link>
        </li>
      </ul>
    </div>
  )
}
