const mongoose = require('mongoose');

const Event = mongoose.model('Event');

module.exports.createEvent = (req, res, next) => {
    var new_event = new Event(req.body);
    new_event.save((err, event) => {
        if (err)
          return next(err);
         console.log('Event Created successful');
         res.json(event);    
    });
}

module.exports.editEvent = function(req, res) {
    console.log(req.body.event_id);
    Event.findOneAndUpdate({event_id: req.body.event_id}, req.body, {new: true}, function(err, event) {
      if (err)
        res.send(err);
      console.log("Updated Successfully"); 
      res.json(event);
    });
  };

  module.exports.ShowEvents = function(req, res, next) {
    var query = {}
     var perPage = 200
     var page = req.params.page || 1
     query.skip=(perPage * page) - perPage
     query.limit=perPage
     Event.find({},{},query,function(err, eventDetails) {
       if (err)
          res.send(err);
       res.json(eventDetails);
     });   
 };

 exports.deleteEvent = function(req, res) {
    Event.remove({
      event_id: req.params.event_id
    },
    function(err, event) {
      if (err)
      {
        res.send(err);
        }
      res.json({ message: 'Event deleted' });
    });
  };
// => localhost:3000/events/
/*
router.get('/', (req, res) => {
    Event.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Events :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Event.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving event :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var event = new Event({
        event_id: req.body.event_id,
    name: req.body.name,
    poc_id: req.body.poc_id,
    poc_name: req.body.poc_name,
    business_unit: req.body.business_unit,
    status: req.body.status,
    month: req.body.month,
    base_location: req.body.base_location,
    venue_address: req.body.venue_address,
    council_name: req.body.council_name,
    beneficiary_name: req.body.beneficiary_name,
    total_volunteers: req.body.total_volunteers,
    total_volunteer_hours: req.body.total_volunteer_hours,
    total_travel_hours: req.body.total_travel_hours,
    });
    event.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Event Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var event = {
        event_id: req.body.event_id,
        name: req.body.name,
        poc_id: req.body.poc_id,
        poc_name: req.body.poc_name,
        business_unit: req.body.business_unit,
        status: req.body.status,
        month: req.body.month,
        base_location: req.body.base_location,
        venue_address: req.body.venue_address,
        council_name: req.body.council_name,
        beneficiary_name: req.body.beneficiary_name,
        total_volunteers: req.body.total_volunteers,
        total_volunteer_hours: req.body.total_volunteer_hours,
        total_travel_hours: req.body.total_travel_hours,
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Event Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Event.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in event Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;*/