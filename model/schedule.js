const mongoose = require('mongoose')

const schedule = new mongoose.Schema({
    Patient_email: { type: String, require:true },
    Patient_name: { type: String,  require:true},
    doctorEmail: {type: String, require:true},
    doctorName: {type: String, require:true},
    end_date: {type: Date, require:true},
    status: {type: String,  require:true},
    text: {type: String, require: true},
    drName: { type: String, require:true },
    start_date: { type: Date, required:true },
})

module.exports = mongoose.model('schedule', schedule)