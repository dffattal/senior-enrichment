export const SET_STUDENTS = 'SET_STUDENTS'
export const SET_STUDENT = 'SET_STUDENT'

export const setStudents = students => ({type: SET_STUDENTS, list: students})

export const setStudent = student => ({type: SET_STUDENT, selected: student})
