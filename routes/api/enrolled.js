const express = require('express');
const routerThree = express.Router();
const db = require('../../database');

routerThree.get('/', function(req, res, next) {
    db.select("classes.*", "enrolled.student_id").from('enrolled').join('classes', 'classes.id', 'enrolled.class_id').then(function(data) {
        res.send(data);
    });
 });

routerThree.get('/:id', function(req, res, next) {
   db.select("classes.*", "enrolled.student_id").from('enrolled').join('classes', 'classes.id', 'enrolled.class_id').where('enrolled.student_id', req.params.id).then(function(data) {
       res.send(data);
   });
});

routerThree.post('/:id', function (req, res, next) {
    console.log(req)
    db.insert(req.body).returning('*').into('enrolled').then(function(data) {
        res.send(data);
    });
});


module.exports = routerThree;