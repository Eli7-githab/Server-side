const jwt = require("jsonwebtoken");
const Lessons = require('../models/lessons');

class AllStudent {
    TOKEN_SECRET = "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

    generateAccessToken = (username) => {
        return jwt.sign({ username }, TOKEN_SECRET);
    };

    allStudent = async (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
        const subject = req.query;
        try {
            let l = await Lessons.find(subject);
            return res.status(200).json(l);
        } catch (error) {
            return res.status(500).json({ error: error })
        }
    }
}


module.exports = new AllStudent();

