export const SET_COURSES = 'SET_COURSES'
export const SET_COURSE = 'SET_COURSE'

export const setCourses = courses => ({type: SET_COURSES, list: courses})

export const setCourse = course => ({type: SET_COURSE, selected: course})
