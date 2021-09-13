const jwt = require("jsonwebtoken");
const { ObjectId } = require('mongodb');
const Test=require('../models/test');

class PostMarkTest {
  postMarkTest =async (req, res) => {
    try {
      const { teacherId, marks, lessonId } = req.body;
      //Validations.
      //Check if user exists
        var query = { _id:lessonId };
        let query2 = { ...query, marks: { $elemMatch: { studentId: marks.id } } }
        if (Test.findOne(query2)) 
          await Test.update(query2, { $set: { 'marks.$.mark': marks.mark } })
        else
          await Test.update(query, { $addToSet: { marks: { studentId: marks.id, mark: marks.mark } } })
        return res.send();
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

module.exports = new PostMarkTest();

