const express = require('express');
const router = express.Router();
const User = require('../db/models/user');

router.get('/', (req, res, next) => {
    User.find({})
    .then(usr => res.json(usr))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    User.findById(req.params.id)
    .then(usr => res.json(usr))
    .catch(next)
})

router.post('/', (req, res, next) => {
    User.create(req.body)
    .then(usr => res.json(usr))
    .catch(next)
    // res.redirect('/');
})

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    User.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true }
    )
    .then(msg => res.json(msg))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    User.findOneAndRemove({ _id: id })
    .then(usr => res.json(usr))
    .catch(next)
})

module.exports = router;