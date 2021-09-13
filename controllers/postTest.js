const jwt = require("jsonwebtoken");
const Test = require('../models/test');

class PostTest {
    postTest = async (req, res) => {
        try {
            const { teacher, nameSubject, date, file, title, subject } = req.body;
            //Validations.
            //Check if user exists
            var marks = [];
            var myobj = new Test({ teacher, nameSubject, date, file, title, subject, marks });
            await myobj.save();

            // const token = generateAccessToken(user);
            // console.log("token", token);
            return res.send();

        } catch (error) {
            res.status(500).send(error)
        }
    }
}

module.exports = new PostTest();
