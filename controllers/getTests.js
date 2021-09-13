const jwt = require("jsonwebtoken");
const Test = require('../models/test');

class GetTests {
    TOKEN_SECRET = "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

    generateAccessToken = (username) => {
        return jwt.sign({ username }, TOKEN_SECRET);
    };

    getTests = async (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
        try {
            let theTests = Test.find();
            return res.status(200).json(theTests);
        } catch (error) {
            return res.status(500).json({ error: error })
        }
    }
}

module.exports = new GetTests();

