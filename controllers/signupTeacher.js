const jwt = require("jsonwebtoken");
const Teacher = require('../models/teacher');

class SignupTeacher {
  signupTeacher = async (req, res) => {
    try {
      const { subject, firstName, lastName, id, email, password, arrMarks, arrAttendance } = req.body; //Adress, phone ....
      //Validations.

      var myobj =new Teacher({ subject, firstName, lastName, id, email, password, arrMarks, arrAttendance });
     await myobj.save()
        console.log("1 document inserted");

        // const token = generateAccessToken(user);
        // console.log("token", token);
        return res.send();
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

module.exports = new SignupTeacher();