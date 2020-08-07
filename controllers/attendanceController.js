const mongoose = require('mongoose');
const Attendance = mongoose.model('Attendance');

module.exports.createAttendance = (req, res, next) => {
    var new_attendance = new Attendance(req.body);
    new_attendance.save((err, attendance) => {
        if (err) {
            console.log(err);
            return next(err);
        }
         console.log('Attendance Created successful');
         res.json(attendance);    
    });
}

module.exports.editAttendance = function(req, res) {
    console.log(req.body.attendance_id);
    Event.findOneAndUpdate({attendance_id: req.body.event_id}, req.body, {new: true}, function(err, attendance) {
      if (err)
        res.send(err);
      console.log("Updated Successfully"); 
      res.json(attendance);
    });
  };

  module.exports.showAttendance = function(req, res, next) {
    var query = {}
     var perPage = 200
     var page = req.params.page || 1
     query.skip=(perPage * page) - perPage
     query.limit=perPage
     Attendance.find({},{},query,function(err, attendanceDetails) {
       if (err)
          res.send(err);
       res.json(attendanceDetails);
     });   
 };

 /*exports.deleteAttendance = function(req, res) {
    Event.remove({
      event_id: req.params.event_id
    },
    function(err, event) {
      if (err)
      {
        res.send(err);
        }
      res.json({ message: 'Event deleted' });
    });
  };
*/
/*const express = require('express');
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

module.exports = router;*/