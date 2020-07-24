const mongoose = require('mongoose');

var Attendance = mongoose.model('Attendance', {
    emp_id: { type: Number },
    emp_name: { type: String },
    event_id: { type: String },
    base_location: { type: String },
    beneficiary_name: { type: String },
    event_name: { type: String},
    event_date: { type: String},
    email_status: { type: String },
    att_type: { type: String },
});

module.exports = { Attendance };
