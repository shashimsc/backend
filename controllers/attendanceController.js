const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Attendance } = require('../models/attendance');
const attendance = require('../models/attendance');

// => localhost:3000/attendance/
router.get('/', (req, res) => {
    Attendance.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Attendance :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Attendance.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Attendance :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var att = new Attendance({
        emp_id: req.body.emp_id,
        emp_name: req.body.emp_name,
        event_id: req.body.event_id,
        base_location: req.body.base_location,
        beneficiary_name: req.body.beneficiary_name,
        event_name: req.body.event_name,
        event_date: req.body.event_date,
        email_status: req.body.email_status,
        att_type: req.body.att_type,
    });
    att.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Attendance Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var att = {
        emp_id: req.body.emp_id,
        emp_name: req.body.emp_name,
        event_id: req.body.event_id,
        base_location: req.body.base_location,
        beneficiary_name: req.body.beneficiary_name,
        event_name: req.body.event_name,
        event_date: req.body.event_date,
        email_status: req.body.email_status,
        att_type: req.body.att_type,
    };
    Attendance.findByIdAndUpdate(req.params.id, { $set: att }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Attendance Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Attendance.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Attendance Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;