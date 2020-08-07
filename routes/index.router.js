const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/userController.js');
const ctrlEvent = require('../controllers/eventController.js');
const ctrlAttendance = require('../controllers/attendanceController.js');
const ctrlFeedback = require('../controllers/feedbackController.js');
const ctrlQuestion = require('../controllers/questionController.js');

const jwtHelper = require('../config/jwtHelper');

router.post('/createUser', ctrlUser.createUser);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.post('/createEvent', ctrlEvent.createEvent);
router.put('/editEvent/:EventId', ctrlEvent.editEvent);
router.get('/ShowEvents',ctrlEvent.ShowEvents);
router.delete('/deleteEvent/:EventId',ctrlEvent.deleteEvent);

router.post('/createAttendance', ctrlAttendance.createAttendance);
router.put('/editAttendance/:AttendanceId', ctrlAttendance.editAttendance);
router.get('/ShowAttendance',ctrlAttendance.ShowEvents);


router.post('/createFeedback', ctrlFeedback.createFeedback);
router.put('/editFeedback/:EventId', ctrlFeedback.editFeedback);
router.get('/ShowFeedback',ctrlFeedback.ShowFeedback);
router.delete('/deleteFeedback/:eventId/:employeeId',ctrlFeedback.deleteFeedback);
router.get('/ShowFeedbacks',ctrlFeedback.ShowFeedbacks);

router.post('/createQuestion', ctrlQuestion.createQuestion);
router.put('/editQuestion/:question_id', ctrlQuestion.editQuestion);
router.get('/ShowQuestion',ctrlQuestion.ShowQuestion);
router.delete('/deleteQuestion/:question_id',ctrlQuestion.deleteQuestion);
router.get('/ShowQuestions',ctrlQuestion.ShowQuestions);

//router.get('/getEventEnrollmentsRatio',ctrlEvent.getNoOfEnrollments);
//router.get('/getEventParticipationRatio',ctrlEvent.eventParticipationRatio);

module.exports = router;