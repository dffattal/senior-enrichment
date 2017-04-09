import React, { Component } from 'react';
import { Link, activeClassName } from 'react-router'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import store from '../store'

export default class Root extends Component {
  constructor() {
    super()
    this.state = store.getState()
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <div className="navbar-brand">Back to School</div>
            </div>
            <Navbar path="/" />
          </div>
        </nav>
        <div className="col-lg-12 clearfix">
          {this.props.children}
        </div>
      </div>
    )
  }
}
