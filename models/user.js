const mongoose = require('mongoose');

var User = mongoose.model('User', {
    emp_id: { type: String },
    name: { type: String },
    password: { type: String },
    role: { type: String },
    active: { type: String}
});

module.exports = { User };