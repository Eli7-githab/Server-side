const mongoose = require('mongoose');
const Schema = mongoose.Schema

const studentSchema = new Schema({

    subject: String,
    firstName: String,
    lastName: String,
    email: String,
    password: Date,
})

module.exports = mongoose.model('student', studentSchema)