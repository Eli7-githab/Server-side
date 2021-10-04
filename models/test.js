const mongoose = require('mongoose');
const Schema = mongoose.Schema

const testSchema = new Schema({

    teacher: String,
    nameSubject: { type: String, required: true },
    date: Date,
    file: String,
    comment: String,
    subject: String,
    marks: [
        {
            studentId: { type: Schema.Types.ObjectId, ref: 'student' },
            mark: Number
        }
    ]
})

module.exports = mongoose.model('test', testSchema)