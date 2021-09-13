const mongoose = require('mongoose');
const Schema=mongoose.Schema

const testSchema = new Schema({
    teacher: String,
    nameSubject: String,
    date: Date,
    file: String,
    title: String,
    subject: String,
    marks: [
        {
            studentId: {type:Schema.Types.ObjectId, ref:'student'},
            mark: Number
        }
    ]
})

module.exports=mongoose.model('test',testSchema)