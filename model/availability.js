const mongoose = require('mongoose')

const hours = new mongoose.Schema({
    startTime: {type: String, require: true},
    endTime: {type: String, require: true}
})

const availability = new mongoose.Schema({
    date: {type: Date, require: true },
    day: {type: String, require: true},
    hours: hours,
    availID: {type: String, require: true, index: { unique: true }},
    doctorName: {type: String, require: true},
    doctorEmail: {type: String, require: true, lowercase: true, index: {unique: true}},
})

module.exports = mongoose.model('availability', availability)