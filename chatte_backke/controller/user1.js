const express = require('express')
const router = express.Router()
const User1 = require('../db/models/user1')

router.get('/' , (req, res, next) => {
    User1.find({})
    .then(person_1 => res.json(person_1))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    User1.find({_id: req.params.id})
    .then(person_1 => res.json(person_1))
    .catch(next)
})

router.post('/', (req, res, next) => {
    User1.create(req.body)
    .then(person_1 => {res.json(person_1)})
})

router.put('/:id', (req, res, next) => {
    User1.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(person_1 => res.json(person_1))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
    User1.findOneAndDelete({_id: req.params.id})
    .then(person_1 => res.json(person_1))
    .catch(next)
})

module.exports = router