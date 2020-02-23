const express = require('express');
const router = express.Router();
const db = require('../../database');


router.get('/', function(req, res, next) {
    console.log(req.barfFace)
   db.select().from('students').then(function(data) {
       res.send(data);
   });
});

router.post('/', function (req, res, next) {
    console.log(req.body)
    db.insert(req.body).returning('*').into('students').then(function(data) {
        res.send(data);
    });
});

router.put('/:id', function (req, res, next) {
    db('students').where({ id: req.params.id }).update(req.body).returning('*').then(function(data) {
        res.send(data);
    });
});

router.delete('/:id', function (req, res, next) {
    db('students').where({ id: req.params.id}).del().then(function () {
        res.json({ success:true});
    });
});

router.get('/:id', function (req, res, next) {
    db('students').where({id:req.params.id}).select().then(function(data) {
        res.send(data);
    });
});

module.exports = router;
