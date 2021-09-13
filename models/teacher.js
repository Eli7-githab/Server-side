const mongoose = require('mongoose');
const Schema = mongoose.Schema

const teacherSchema = new Schema({

    subject: String,
    firstName: String,
    lastName: String,
    id: String,
    email: String,
    password: String,
    arrMarks: [
        {
            studentId: { type: Schema.Types.ObjectId, ref: 'student' },
            mark: Number
        }
    ],

})
module.exports = mongoose.model('teacher', teacherSchema)