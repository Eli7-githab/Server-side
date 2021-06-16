const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const LoginController = require("../controllers/login")
const SignupController = require("../controllers/signup")
const PostLessonController = require("../controllers/postLesson")
const PreviousLessonsController = require("../controllers/previousLessons")
const SignupTeacherController = require("../controllers/signupTeacher")
const AttendanceController = require("../controllers/attendance")


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mySchoolDB";

const TOKEN_SECRET =
  "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

const generateAccessToken = (username) => {
  return jwt.sign({ username }, TOKEN_SECRET);
};

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mySchoolDB";



router.get('/mySchoolDB', (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.error(err)
      return res.status(500).send(err);
    }
    else {
      console.log("Database created!");
      db.close();
      return res.send(err);
    }
    res.send();
  });
})



router.get("/createStudentColection", (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) return res.status(500).send(err);
    var dbo = db.db("mySchoolDB");
    dbo.createCollection("student", function (err, response) {
      if (err) return res.status(500).send(err);
      console.log("Collection created!");
      db.close();
      return res.send('UserColection created')
    });
  });
})


router.get("/createTeacherColection", (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) return res.status(500).send(err);
    var dbo = db.db("mySchoolDB");
    dbo.createCollection("teacher", function (err, response) {
      if (err) return res.status(500).send(err);
      console.log("Collection created!");
      db.close();
      return res.send('UserColection created')
    });
  });
})

router.post("/signupTeacher", SignupTeacherController.signupTeacher);

router.get("/login", LoginController.login);

router.get("/s_previousLessons/:student", PreviousLessonsController.previousLessons);

router.post("/signup", SignupController.signup);

router.post("/postLesson", PostLessonController.postLesson)

router.post("/attendance", AttendanceController.attendance)

router.get("/")

module.exports = router;
