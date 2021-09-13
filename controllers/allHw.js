var mongoose = require('mongoose');
const Lessons=require('../models/lessons');
const jwt = require("jsonwebtoken");
var url = "mongodb://localhost:27017/mySchoolDB";

class AllHw {
    TOKEN_SECRET = "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

    generateAccessToken = (username) => {
        return jwt.sign({ username }, TOKEN_SECRET);
    };

    allHw = async(req, res) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
        const {subject} = req.query
            try {
                
                let resultHw = await Lessons.find({subject:subject})
                return res.status(200).json(resultHw);
            } catch (error) {

                return res.status(500).json({ error: error })
            }
    }
}


module.exports = new AllHw();

