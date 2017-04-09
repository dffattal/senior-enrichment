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
        <li className={location === "/campus" ? "active" : ""}>
          <Link to="/campus">Campuses</Link>
        </li>
        <li className={location === "/course" ? "active" : ""}>
          <Link to="/course">Courses</Link>
        </li>
        <li className={location === "/instructor" ? "active" : ""}>
          <Link to="/instructor">Instructors</Link>
        </li>
        <li className={location === "/student" ? "active" : ""}>
          <Link to="/student">Students</Link>
        </li>
      </ul>
    </div>
  )
}
