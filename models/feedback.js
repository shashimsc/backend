const express = require('express');
const mongoose = require('mongoose');

var feedbackSchema = new mongoose.Schema({
    event_id: { type: String },
    emp_id: { type: String },
    choice: { type: String },
    status: { type: String }
});

mongoose.model('Feedback', feedbackSchema);