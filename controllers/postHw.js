const jwt = require("jsonwebtoken");
const Lessons = require('../models/lessons');

const { ObjectId } = require('mongodb');

class PostHw {
    postHw = async (req, res) => {
        try {
            const { id, nameSubject, date, file, comments, question1, question2, subject } = req.body;
            //Validations.
            //Check if  exists

            var students = [];
            console.log('id: ' + id);
            var myobj = { nameSubject, date, file, comments, question1, question2 };
            Lessons.updateOne({ _id: ObjectId(id) }, { $addFields: { hwQuestions: myobj } }, function (err, res) {
                // Lessons.findByIdAndUpdate( ObjectId(id) ,  { hwQuestions: myobj  }, function (err, res) {
                if (err) throw err;
                console.log("1 document inserted");

                // const token = generateAccessToken(user);
                // console.log("token", token);
                return res.send();
            });
        } catch (error) {
            res.status(500).send(error)
        }
    }
}

module.exports = new PostHw();




