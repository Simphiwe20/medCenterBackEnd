const mongoose = require('mongoose')

const patient = new mongoose.Schema({
    fullName: { type: String, required: false },
    email: { type: String, required: true, lowercase: true, index: { unique: true } },
    contact: { type: String, required: false },
    cardNO: {type:String, required:false},
    bloodGroup: { type: String, required: false },
    password: { type: String, required: false },
    experiences:{ type: String, required: false },
    gender : { type: String, required: false },
    identityNO: { type: String, required: false },
    medicalAidNO :{ type: String, required: false }
})

module.exports = mongoose.model('patient', patient);