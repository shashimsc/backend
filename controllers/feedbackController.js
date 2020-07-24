const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Feedback } = require('../models/feedback');

// => localhost:3000/feedback/
router.get('/', (req, res) => {
    Feedback.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Feedback :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Feedback.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Feedback :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var fback = new Feedback({
        event_id: req.body.event_id,
        emp_id: req.body.emp_id,
        choice: req.body.choice,
        status: req.body.status,
    });
    fback.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Feedback Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var fback = {
        event_id: req.body.event_id,
        emp_id: req.body.emp_id,
        choice: req.body.choice,
        status: req.body.status,
    };
    Feedback.findByIdAndUpdate(req.params.id, { $set: fback }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Feedback Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Feedback.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Feedback Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;