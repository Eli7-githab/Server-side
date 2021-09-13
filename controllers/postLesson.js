
const jwt = require("jsonwebtoken");
const Lessons = require('../models/lessons');


class PostLesson {
  postLesson = async (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    const { teacher, numLesson, lessonName, file, date, notes, time, subject } = req.body; //Adress, phone ....
    //Validations.
    //Check if user exists
    var arrHw = [];
    var myobj = new Lessons({ teacher, numLesson, lessonName, file, date, notes, time, subject, arrHw });
    await myobj.save();
    console.log("1 document inserted");

    // const token = generateAccessToken(user);
    // console.log("token", token);
    return res.send();


  }
}

module.exports = new PostLesson();
