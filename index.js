require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');

/*var employeeController = require('./controllers/employeeController.js');
var userController = require('./controllers/userController.js');
var eventController = require('./controllers/eventController.js');
var attendanceController = require('./controllers/attendanceController.js');
var feedbackController = require('./controllers/feedbackController.js');
var questionController = require('./controllers/questionController.js');
*/

//middleware
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

app.listen(process.env.PORT, () => console.log('Server started at port : ${process.env.PORT}'));


/*app.use('/employees', employeeController);
app.use('/users', userController);
app.use('/events', eventController);
app.use('/attendance', attendanceController);
app.use('/feedback', feedbackController);
app.use('/question', questionController);*/
