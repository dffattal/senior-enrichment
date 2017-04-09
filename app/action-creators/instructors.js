export const SET_INSTRUCTORS = 'SET_INSTRUCTORS'
export const SET_INSTRUCTOR = 'SET_INSTRUCTOR'

export const setInstructors = instructors => ({type: SET_INSTRUCTORS, list: instructors})

export const setInstructor = instructor => ({type: SET_INSTRUCTOR, selected: instructor})
