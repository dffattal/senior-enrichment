import { SET_THING_TO_EDIT } from '../action-creators/edit'

const initialEditState = {
  thingToEdit: {}
}

export default function (state = initialEditState, action) {
  const newState = Object.assign({}, state)

  switch (action.type) {

    case SET_THING_TO_EDIT:
      newState.thingToEdit = action.thingToEdit
      break;

    default:
      return state

  }
  return newState
}
