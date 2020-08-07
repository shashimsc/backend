const mongoose = require('mongoose');
//mongoose.set('useFindAndModify', false);
 
const Question = mongoose.model('Question');
module.exports.createQuestion = (req, res, next) => {
    var new_question = new Question(req.body);
    new_question.save((err, question) => {
        if (err)
          return next(err);
         console.log('Question Created successfully');
         res.json(question);    
    });
};

module.exports.editQuestion = function(req, res) {
    console.log('hello');
    console.log(req.body.question_id);
    Question.findOneAndUpdate({question_id: req.params.question_id}, req.body, {new: true}, function(err, question) {
      if (err)
        res.send(err);
      console.log("Updated Successfully"); 
      res.json(question);
    });  
};

module.exports.deleteQuestion = function(req, res) {
    Question.remove({
      question_id: req.params.question_id
    },
    function(err, question) {
      if (err)
        res.send(err);
      res.json({ message: 'Question deleted' });
    });
  };
  
 /* module.exports.getQuestionDetails=function(question_id,callback){
    Question.find({question_id:question_id}, function(err, questionDetails) {
      if (err){
          return callback(err);
      }
      return callback(questionDetails);
    });
  };
*/
  module.exports.showQuestions = function(req, res, next) {
    var query = {}
     var perPage = 200
     var page = req.params.page || 1
     query.skip=(perPage * page) - perPage
     query.limit=perPage
     Question.find({},{},query,function(err, questionDetails) {
       if (err)
          res.send(err);
       res.json(questionDetails);
     });   
 
 };


/*
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
        answer1: req.body.answer1,
        answer2: req.body.answer2,
        answer3: req.body.answer3,
        answer4: req.body.answer4,
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
        answer1: req.body.answer1,
        answer2: req.body.answer2,
        answer3: req.body.answer3,
        answer4: req.body.answer4,
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

module.exports = router;*/
