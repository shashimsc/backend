const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Question } = require('../models/question');

// => localhost:3000/questions/
router.get('/', (req, res) => {
    Question.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Questions :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Question.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Question :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var quest = new Question({
        question_id: req.body.question_id,
        question: req.body.question,
        q_type: req.body.q_type,
        participant_type: req.body.participant_type,
    });
    quest.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Question Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var quest = {
        question_id: req.body.question_id,
        question: req.body.question,
        q_type: req.body.q_type,
        participant_type: req.body.participant_type,
    };
    Question.findByIdAndUpdate(req.params.id, { $set: quest }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Question Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Question.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Question Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;