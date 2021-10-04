
const jwt = require("jsonwebtoken");
const { ObjectId } = require('mongodb');
const Student=require('../models/student');
const Tests=require('../models/test')
const Lessons=require('../models/lessons') 
class PostMark {
  postMark = async(req, res) => {
    try {
      const { teacherId, marks, lessonId } = req.body;
      //Validations.
      //Check if user exists
        // ---------
        // להגיד לו לאיזה שדא להכניס ז"א לתוך arrHw??? או שזה כבר מכניס לתוך משהו???
        // --------
        var query = { _id: ObjectId(lessonId.name) };
        // var query = { _id: ObjectId(lessonName) };
        let field = lessonId.type === "lessons" ? 'arrHw' : 'marks'
        const collection=lessonId.type === "lessons" ? Lessons:Tests
        let query2 = { ...query, [field]: { $elemMatch: { studentId: marks.id } } }
        if (await collection.findOne(query2))
          await collection.updateMany(query2, { $set: { [`${field}.$.mark`]: marks.mark } })
        else
          await collection.updateMany(query, { $addToSet: { [field]: { studentId: marks.id, mark: marks.mark } } })
        // var query = { _id:lessonId };
        // let query2 = { ...query, marks: { $elemMatch: { studentId: marks.id } } }
        // if (await dbo.collection("lessons").findOne(query2)) 
        //   await dbo.collection("lessons").update(query2, { $set: { 'marks.$.mark': marks.mark } })
        // else
        //   await dbo.collection("lessons").update(query, { $addToSet: { marks: { studentId: marks.id, mark: marks.mark } } })
        return res.send();
   
    } catch (error) {
      res.status(500).send(error)
    }
  }
  postFile = async (req, res) => {
    try {
        const {lessonId, studentId, file } = req.body;
        //Validations.
        //Check if  exists
        const obj = {studentId, file}
        // Lessons.findByOneAndUpdate({_id:ObjectId(lessonId),"arrHw.studentId":ObjectId(studentId) }, {
          Lessons.findByOneAndUpdate({_id:ObjectId(lessonId)}, {
            $push: { arrHw: obj }
            //  ,function(err, res) {
            //     if (err) throw err;
            //     console.log("the file inserted");
            //     // const token = generateAccessToken(user);
            //     // console.log("token", token);
            //     return res.send();
            // }
          }    
        );
    } catch (error) {
        res.status(500).send(error)
    }
}
}
module.exports = new PostMark();
