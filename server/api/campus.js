const router = require('express').Router()
const db = require('../../db')
const Campus = require('../../db/models/campus')

router.param('id', function (req, res, next, id) {
	req.id = id
	next()
})

router.get('/', function (req, res, next) {
	Campus.findAll()
	.then(campuses => {
		res.json(campuses)
	})
	.catch(next)
})

router.get('/:id', function (req, res, next) {
	Campus.findById(req.id)
	.then(campus => {
		if (campus) res.json(campus)
		else res.status(404).send('Campus not found!')
	})
	.catch(next)
})

router.post('', function (req, res, next) {
	Campus.create(req.body)
	.then(newCampus => {
		res.status(201).json(newCampus)
	})
	.catch(next)
})

router.put('/:id', function (req, res, next) {
	Campus.update(req.body, {
		where: {
			id: req.id
		}
	})
	.then(updatedCampus => {
		res.json(updatedCampus)
	})
	.catch(next)
})

router.delete('/:id', function (req, res, next) {
	Campus.destroy({
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
