export const SET_STUDENTS = 'SET_STUDENTS'
export const SET_STUDENT = 'SET_STUDENT'
export const SET_STUDENTS_IN_COURSE = 'SET_STUDENTS_IN_COURSE'

export const setStudents = students => ({type: SET_STUDENTS, list: students})

export const setStudent = student => ({type: SET_STUDENT, selected: student})

export const setStudentsInCourse = students => ({type: SET_STUDENTS_IN_COURSE, courseStudents: students})
