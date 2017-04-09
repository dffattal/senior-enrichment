export const SET_CAMPUSES = 'SET_CAMPUSES'
export const SET_CAMPUS = 'SET_CAMPUS'

export const setCampuses = campuses => ({type: SET_CAMPUSES, list: campuses})

export const setCampus = campus => ({type: SET_CAMPUS, selected: campus})
