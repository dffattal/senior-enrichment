'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into Sequelize so any other part of the application could call Sequelize.model('user') OR Sequelize.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)

// const User = require('./user')
const Student = require('./student')
const Campus = require('./campus')
const Course = require('./course')
const Instructor = require('./instructor')

Student.belongsTo(Campus)
Course.belongsTo(Campus)
Instructor.belongsTo(Campus)
Course.belongsTo(Instructor)
Student.belongsToMany(Course, {through: 'courses-students'})


module.exports = {Student, Campus, Course, Instructor}
