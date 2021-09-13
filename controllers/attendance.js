const jwt = require("jsonwebtoken");
const Lessons = require('../models/lessons');

class Attendance {
  attendance = async (req, res) => {
    try {
      const { d, userId, subject } = req.body; //Adress, phone ....
      //Validations.
      //Check if user exists

      var myobj = { d, userId };
      // let result =  await dbo.collection("teacher").findOne() //חיפוש לי תז מורה
      // dbo.collection("teacher").update({subject:subject}, {$set:{arrAttendance}}, {

      //   arrAttendance: [myobj, ... ]      
      // })

      let result = await Lessons.findOneAndUpdate({ "subject": subject, date: { $lte: new Date() } },);
      // result.findOneAndUpdate("attendance")
      // let result =  await dbo.collection("teacher").findOneAndUpdate({subject:subject},{arrAttendance: $push(myobj) }
      //   , function (err, res) {
      //     if (err) throw err;
      //     console.log("1 document inserted attendance");
      //     console.log(result);
      //     db.close();
      //   });
      // const token = generateAccessToken(user);
      // console.log("token", token);
      return res.send();
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

module.exports = new Attendance();

