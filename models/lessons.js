const mongoose = require('mongoose');
const Schema = mongoose.Schema

const lessonsSchema = new Schema({

    teacher: String,
    numLesson: Number,
    lessonName: String,
    file: String,
    date: Date,
    notes: String,
    time: String,
    subject: String,
    arrHw: [
        {
            studentId: { type: Schema.Types.ObjectId, ref: 'student' },
            mark: Number
        }
    ],
    hwQuestions: [
        {
            nameSubject: String,
            date: Date,
            file: String,
            comments: String,
            question1: String,
            question2: String,

        }
    ]
})
module.exports = mongoose.model('lessons', lessonsSchema)