const router = require('express').Router()
const db = require('../../db')
const Student = require('../../db/models/student')
const Campus = require('../../db/models/campus')
const Course = require('../../db/models/course')

router.param('id', function (req, res, next, id) {
	req.id = id
	next()
})

router.get('/', function (req, res, next) {
	Student.findAll({include: [Course]})
	.then(students => {
		res.json(students)
	})
	.catch(next)
})

router.get('/:id', function (req, res, next) {
	Student.findById(req.id, {include: [Campus, Course]})
	.then(student => {
		if (student) res.json(student)
		else res.status(404).send('Student not found!')
	})
	.catch(next)
})

router.get('/course/:id', function (req, res, next) {
	Student.findAll({
		include: [{
			model: Course,
			where: {
				id: req.id
			}
		}]
	})
	.then(studentsInCourse => {
		if (studentsInCourse) res.json(studentsInCourse)
		else res.status(404).send('No students found!')
	})
	.catch(next)
})

router.post('', function (req, res, next) {
	Student.create(req.body)
	.then(newStudent => {
		res.status(201).json(newStudent)
	})
	.catch(next)
})

router.put('/:id', function (req, res, next) {
	Student.update(req.body, {
		where: {
			id: req.id
		}
	})
	.then(updatedStudent => {
		res.json(updatedStudent)
	})
	.catch(next)
})

router.delete('/:id', function (req, res, next) {
	Student.destroy({
		where: {
			id: req.id
		}
	})
  .then(function () {
    res.status(204).send()
  })
  .catch(next)
})

module.exports = router
