const router = require('express').Router()
const db = require('../../db')
const Instructor = require('../../db/models/instructor')
const Campus = require('../../db/models/campus')

router.param('id', function (req, res, next, id) {
	req.id = id
	next()
})

router.get('/', function (req, res, next) {
	Instructor.findAll()
	.then(instructors => {
		res.json(instructors)
	})
	.catch(next)
})

router.get('/:id', function (req, res, next) {
	Instructor.findById(req.id, {include: [Campus]})
	.then(instructor => {
		if (instructor) res.json(instructor)
		else res.status(404).send('Instructor not found!')
	})
	.catch(next)
})

router.post('', function (req, res, next) {
	Instructor.create(req.body)
	.then(newInstructor => {
		res.status(201).json(newInstructor)
	})
	.catch(next)
})

router.put('/:id', function (req, res, next) {
	Instructor.update(req.body, {
		where: {
			id: req.id
		}
	})
	.then(updatedInstructor => {
		res.json(updatedInstructor)
	})
	.catch(next)
})

router.delete('/:id', function (req, res, next) {
	Instructor.destroy({
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
