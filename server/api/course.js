const router = require('express').Router()
const db = require('../../db')
const Course = require('../../db/models/course')
const Campus = require('../../db/models/campus')
const Instructor = require('../../db/models/instructor')
const Student = require('../../db/models/student')

router.param('id', function (req, res, next, id) {
	req.id = id
	next()
})

router.get('/', function (req, res, next) {
	Course.findAll()
	.then(courses => {
		res.json(courses)
	})
	.catch(next)
})

router.get('/:id', function (req, res, next) {
	Course.findById(req.id, {include: [Campus, Instructor]})
	.then(course => {
		if (course) res.json(course)
		else res.status(404).send('Course not found!')
	})
	.catch(next)
})

router.post('', function (req, res, next) {
	Course.create(req.body)
	.then(newCourse => {
		res.status(201).json(newCourse)
	})
	.catch(next)
})

router.put('/:id', function (req, res, next) {
	Course.update(req.body, {
		where: {
			id: req.id
		}
	})
	.then(updatedCourse => {
		res.json(updatedCourse)
	})
	.catch(next)
})

router.delete('/:id', function (req, res, next) {
	Course.destroy({
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
