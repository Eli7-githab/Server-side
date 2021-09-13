
const jwt = require("jsonwebtoken");
const Student = require('../models/student');

class Signup {
  signup = async (req, res) => {
    try {
      const { subject, firstName, lastName, id, email, password } = req.body; //Adress, phone ....
      //Validations.
      //Check if user exists

      var myobj = new Student({ subject, firstName, lastName, id, email, password });
      await myobj.save();
      console.log("1 document inserted");

      // const token = generateAccessToken(user);
      // console.log("token", token);
      return res.send();

    } catch (error) {
      res.status(500).send(error)
    }
  }
}

module.exports = new Signup();