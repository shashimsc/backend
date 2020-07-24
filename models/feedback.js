const mongoose = require('mongoose');

var Feedback = mongoose.model('Feedback', {
    event_id: { type: String },
    emp_id: { type: String },
    choice: { type: String },
    status: { type: String }
});

module.exports = { Feedback };