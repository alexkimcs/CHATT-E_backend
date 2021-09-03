const express = require('express')
const router = express.Router()
const User2 = require('../db/models/user2')

router.get('/User2' , (req, res, next) => {
    User2.find({})
    .then(person_2 => res.json(person_2))
    .catch(next)
})

router.get('/User2/:id', (req, res, next) => {
    User2.find({_id: req.params.id})
    .then(person_2 => res.json(person_2))
    .catch(next)
})

router.post('/User2', (req, res, next) => {
    User2.create(req.body)
    .then(person_2 => {res.json(person_2)})
})

router.put('/User2/:id', (req, res, next) => {
    User2.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(person_2 => res.json(person_2))
    .catch(next)
})

router.delete('/User2/:id', (req, res, next) => {
    User2.findOneAndDelete({_id: req.params.id})
    .then(person_2 => res.json(person_2))
    .catch(next)
})

module.exports = router