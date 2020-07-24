const mongoose = require('mongoose');

var Question = mongoose.model('Question', {
    question_id: { type: Number },
    question: { type: String },
    q_type: { type: String },
    participant_type: { type: String }
});

module.exports = { Question };