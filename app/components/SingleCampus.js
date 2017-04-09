import React, { Component } from 'react'
import { Link } from 'react-router'

export default function Campus (props) {
  return (
    props.campus.id ? <div>
      <h2>{props.campus.name}</h2>
      <h3>Located in {props.campus.location}</h3>
      <p>A description goes here!</p>
    </div> : <h3>Campus not found!</h3>
  )
}
