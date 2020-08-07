const express = require('express');
const mongoose = require('mongoose');

var attendanceSchema = new mongoose.Schema({
    attendance_id: { type: Number},
    emp_id: { type: String },
    emp_name: { type: String },
    event_id: { type: String },
    base_location: { type: String },
    beneficiary_name: { type: String },
    event_name: { type: String},
    event_date: { type: String},
    email_status: { type: String },
    att_type: { type: String }
});

mongoose.model('Attendance', attendanceSchema);