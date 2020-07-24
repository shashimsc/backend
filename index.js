const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');
var userController = require('./controllers/userController.js');
var eventController = require('./controllers/eventController.js');
var attendanceController = require('./controllers/attendanceController.js');
var feedbackController = require('./controllers/feedbackController.js');
var questionController = require('./controllers/questionController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/employees', employeeController);
app.use('/users', userController);
app.use('/events', eventController);
app.use('/attendance', attendanceController);
app.use('/feedback', feedbackController);
app.use('/question', questionController);
