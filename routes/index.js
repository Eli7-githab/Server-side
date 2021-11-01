const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const LoginController = require("../controllers/login")
const SignupController = require("../controllers/signup")
const PostLessonController = require("../controllers/postLesson")
const PreviousLessonsController = require("../controllers/previousLessons")
const SignupTeacherController = require("../controllers/signupTeacher")
const AttendanceController = require("../controllers/attendance")
const TeachersController = require("../controllers/allTeachers")
const StudentsController = require("../controllers/allStudent")
const PostMarkController = require("../controllers/postMark")
const PostMarkTestController = require("../controllers/postMarkTest")
const PostTestController = require("../controllers/postTest")
const GetTestsController = require("../controllers/getTests")
const GetTestsController2 = require("../controllers/allTests")
const PostHwController = require("../controllers/postHw")
const GetAllAttendanceController = require("../controllers/allAttendance")
const GetAllMarksController = require("../controllers/allMarks")
const GetAllHwController = require("../controllers/allHw")
const GetAllLessonsController = require("../controllers/allLessons")
const MailController = require("../controllers/mail")
const ForgetPassword = require("../controllers/forgetPassword")

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mySchoolDB";

const TOKEN_SECRET =
  "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

const generateAccessToken = (username) => {
  return jwt.sign({ username: username }, TOKEN_SECRET);
};
// const checkUserMiddlware = async (req, res, next) => {
//   try {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
//     console.log('on middlware');
//     let cookie = req.cookies
//     let user = jwt.verify(cookie.jwt, TOKEN_SECRET)
//     // var query = { email: user.userName };
//     // let result = await Student.findOne(query)
//     // if(result)
//     return next()
//     // else
//     // return res.status(403).send('forbiden')

//   } catch (err) {
//     console.log('error', err);
//     return res.status(403).json({ message: 'forbiden' })
//   }
// }

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
    dbo.createCollection("test", function (err, response) {
      if (err) return res.status(500).send(err);
      console.log("Collection created!");
      db.close();
      return res.send('UserColection created')
    });
  });
})

router.post("/signupTeacher", SignupTeacherController.signupTeacher);
router.get("/login", LoginController.login);
// router.get("/s_previousLessons/:id", PreviousLessonsController.previousLessons);
router.get("/s_previousLessons/:subject", PreviousLessonsController.previousLessons);
router.post("/signup", SignupController.signup);
// router.get("/allTeachers", checkUserMiddlware, TeachersController.allTeachers);
router.get("/allTeachers", TeachersController.allTeachers);
router.get("/allHw", GetAllHwController.allHw);
router.get("/allLessons", GetAllLessonsController.allLessons);
router.get("/allAttendance", GetAllAttendanceController.allAttendance);
router.get("/allMarks", GetAllMarksController.allMarks);
// router.get("/allStudents", checkUserMiddlware, StudentsController.allStudent);
router.get("/allStudents", StudentsController.allStudent);
router.get("/viewTest", GetTestsController.getTests);
router.get("/allTests", GetTestsController2.allTests);
router.get("/myTests", GetTestsController2.myTests);
router.post("/postLesson", PostLessonController.postLesson);
router.post("/postHw", PostHwController.postHw);
router.post("/attendance", AttendanceController.attendance);
router.post("/postMark", PostMarkController.postMark);
router.post("/postMarkTest", PostMarkTestController.postMarkTest);
router.post("/postTest", PostTestController.postTest);
router.post("/postFile", PostMarkController.postFile);
router.post("/forgetPassword", ForgetPassword.forgetPassword);
// router.post("/mail", MailController.mailSender);

module.exports = router;
