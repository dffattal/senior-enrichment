import React from 'react'
import { browserHistory } from 'react-router'
import axios from 'axios'
import { onAppLoad } from '../utils'

export default class Campus extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      nameInput: '',
      locationInput: '',
      codeInput: '',
      emailInput: ''
    }
    this.submitChanges = this.submitChanges.bind(this)
  }

  // listCreator (modelName, dataArr) {
  //   if (modelName === this.state.component) return
  //   let title = modelName.substring(0, 1).toUpperCase() + modelName.substring(1) + 's'
  //   return (
  //     <div className="col-lg-2">
  //       <h4>{title}</h4>
  //       <ul>
  //         {dataArr.map(elem => {
  //           if (elem.campusId === props.campus.id) {
  //             return <li key={elem.id}>{elem.name}</li>
  //           }
  //         })}
  //       </ul>
  //     </div>
  //   )
  // }

  changeName (name) {
    this.setState({nameInput: name})
  }

  changeLocation (location) {
    this.setState({locationInput: location})
  }

  changeCode (code) {
    this.setState({codeInput: code})
  }

  changeEmail (email) {
    this.setState({emailInput: email})
  }

  submitChanges (event, component, id) {
    event.preventDefault()
    let reqBody = {
      name: event.target.name ? event.target.name.value : '',
      location: event.target.location ? event.target.location.value : '',
      code: event.target.code ? event.target.code.value : '',
      email: event.target.email ? event.target.email.value : '',
    }
    console.log(component, id)
    axios.put(`/api/${component}/${id}`, reqBody)
    .then(function () {
      onAppLoad()
    })
    .then(function () {
      browserHistory.push(`/${component}/${id}`)
    })
    .catch(console.error)
  }

  render () {
    let component = this.props.location.pathname.split('/')[1]
    let id = this.props.location.pathname.split('/')[2]
    return (
      <div>
        <h2>Currently editing: {this.props.thingToEdit.name}</h2>
        <form onSubmit={event => this.submitChanges(event, component, id)}>
          {this.props.thingToEdit.name &&
            <div>
              <span>Name: </span>
              <input type="text"
                     name="name"
                     defaultValue={this.props.thingToEdit.name}
                     onChange={event => this.changeName(event.target.value)} />
            </div>
          }
          {this.props.thingToEdit.location &&
            <div>
              <span>Location: </span>
              <input type="text"
                     name="location"
                     defaultValue={this.props.thingToEdit.location}
                     onChange={event => this.changeLocation(event.target.value)} />
            </div>
          }
          {this.props.thingToEdit.code &&
            <div>
              <span>Course Code: </span>
              <input type="text"
                     name="code"
                     defaultValue={this.props.thingToEdit.code}
                     onChange={event => this.changeCode(event.target.value)} />
            </div>
          }
          {this.props.thingToEdit.email &&
            <div>
              <span>Email: </span>
              <input type="text"
                     name="email"
                     defaultValue={this.props.thingToEdit.email}
                     onChange={event => this.changeEmail(event.target.value)} />
            </div>
          }
          <input type="submit" value="Submit Changes" />
        </form>
      </div>
    )
  }
}
