const mongoose = require('mongoose');

var Question = mongoose.model('Question', {
    question_id: { type: Number },
    question: { type: String },
    q_type: { type: String },
    participant_type: { type: String },
    answer1: { type: String },
    answer2: { type: String },
    answer3: { type: String },
    answer4: { type: String }
});

module.exports = { Question };
