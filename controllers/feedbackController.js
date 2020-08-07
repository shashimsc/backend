const mongoose = require('mongoose');
const Feedback = mongoose.model('Feedback');
const Event = mongoose.model('Event');

module.exports.createFeedback = (req, res, next) => {
    var new_feedback = new Feedback(req.body);
    new_feedback.save((err, feedback) => {
        if (err)
          return next(err);
         console.log('Feedback sent successful');
         res.json(feedback);    
    });

}
module.exports.editFeedback = function(req, res) {
    Feedback.findOneAndUpdate({event_id: req.params.event_id}, req.body, {new: true}, function(err, feedback) {
      if (err)
        res.send(err);
      console.log("Updated Successfully"); 
      res.json(feedback);
    });
  };


module.exports.ShowFeedback = function(req, res, next) {
   var query = {}
    var perPage = 200
    var page = req.params.page || 1
    query.skip=(perPage * page) - perPage
    query.limit=perPage
    Feedback.find({},{},query,function(err, feedbackDetails) {
      if (err)
         res.send(err);
      res.json(feedbackDetails);
    });   
};
 
exports.deleteFeedback = function(req, res) {
  Feedback.remove({
    EventId: req.params.eventId,
    EmployeeId:req.params.employeeId
  }, function(err, event) {
    if (err)
      res.send(err);
    res.json({ message: 'Feedback deleted' });
  });
};
module.exports.ShowFeedbacks = function(req, res, next) {
   var query = {}
    var perPage = 200
    var page = req.params.page || 1
    query.skip=(perPage * page) - perPage
    query.limit=perPage
    Feedback.find({},{},query,function(err, feedbackDetails) {
      if (err)
         res.send(err);
      res.json(feedbackDetails);
    });   

};



/*const express = require('express');
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

module.exports = router;*/