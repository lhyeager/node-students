const express = require('express');
const routerTwo = express.Router();
const db = require('../../database');

routerTwo.get('/', function(req, res, next) {
    db.select().from('classes').then(function(data) {
        res.send(data);
    });
 });
 
 routerTwo.post('/', function (req, res, next) {
     console.log(req.body)
     db.insert(req.body).returning('*').into('classes').then(function(data) {
         res.send(data);
     });
 });
 
 routerTwo.put('/:id', function (req, res, next) {
     db('classes').where({ id: req.params.id }).update(req.body).returning('*').then(function(data) {
         res.send(data);
     });
 });
 
 routerTwo.delete('/:id', function (req, res, next) {
     db('classes').where({ id: req.params.id}).del().then(function () {
         res.json({ success:true});
     });
 });
 
 routerTwo.get('/:id', function (req, res, next) {
     db('classes').where({id:req.params.id}).select().then(function(data) {
         res.send(data);
     });
 });

 routerTwo.get('/byStudentId/:id', function (req, res, next) {
    db('classes').where({id:req.params.id}).select().then(function(data) {
        res.send(data);
    });
});


 module.exports = routerTwo;