const jwt = require("jsonwebtoken");
const Lessons = require('../models/lessons');

const { ObjectId } = require('mongodb');

class PostHw {
    postHw = async (req, res) => {
        try {
            const { numLesson, nameSubject, date, file, comments, question1, question2, subject } = req.body;
            var myobj = { nameSubject, date, file, comments, question1, question2 };
            //  Lessons.updateOne({ numLesson: id }, { $addFields: { hwQuestions: myobj } }, function (err, res) {
            // Lessons.updateOne({ _id: ObjectId(id) }, { $addFields: { hwQuestions: myobj } }, function (err, res) {
            //Lessons.findByIdAndUpdate( ObjectId(id) ,  { hwQuestions: myobj  }, function (err, res) {
            // Lessons.findByOneAndUpdate( { numLesson: numLesson } ,  { hwQuestions: myobj  }, function (err, res) 
            // console.log(numLesson);
            // console.log(Lessons);

            // Lessons.findByOneAndUpdate({ numLesson: numLesson }, {
            //     $push: { hwQuestions: myobj }, function(err, res) {
            //         if (err) throw err;
            //         console.log("1 document inserted");

            //         // const token = generateAccessToken(user);
            //         // console.log("token", token);
            let les = await Lessons.findOne({ numLesson: numLesson, subject: subject });
            console.log("***", numLesson);
            les.hwQuestions.push(myobj);
            les.save()
            return res.send();
            //     }
            // });
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }
}

module.exports = new PostHw();




