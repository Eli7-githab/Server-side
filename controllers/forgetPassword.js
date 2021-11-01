const jwt = require("jsonwebtoken");
const Student = require('../models/student');
const Teacher = require('../models/teacher');

class ForgetPassword {

    forgetPassword = async (req, res) => {
        try {
            debugger
            const { email, password } = req.body;
            //Validations.
            //Check if  exists
            let l = await Student.findOne({ email: email });
            if (l) {
                l.password = password;
            }
            else {
                l = await Teacher.findOne({ email: email });
                l.password = password;
            }
            l.save();
            return res.send();
        }
        catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }
}
module.exports = new ForgetPassword();

