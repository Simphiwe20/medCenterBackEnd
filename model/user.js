const mongoose = require('mongoose')

const User = new mongoose.Schema({
    fullName: { type: String, required: false },
    email: { type: String, required: true, lowercase: true, index: { unique: true } },
    contact: { type: String, required: false },
    address: {type:String, required:false},
    role: { type: String, required: false },
    password: { type: String, required: false },
    experiences:{ type: String, required: false },
    gender : { type: String, required: false },
    identityNO: { type: String, required: false },
    qualification :{ type: String, required: false }
})


module.exports = mongoose.model('User', User);

