const express = require('express');
const mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    event_id: { type: String },
    name: { type: String },
    poc_id: { type: String },
    poc_name: { type: String },
    business_unit: { type: String },
    status: { type: String },
    month: { type: String },
    base_location: { type: String },
    venue_address: { type: String },
    council_name: { type: String },
    beneficiary_name: { type: String },
    total_volunteers: { type: Number },
    total_volunteer_hours: { type: Number },
    total_travel_hours: { type: Number },
});

mongoose.model('Event', eventSchema);