
const jwt = require("jsonwebtoken");
const { ObjectId } = require('mongodb');
const Student = require('../models/student');
const Tests = require('../models/test')
const Lessons = require('../models/lessons')
class PostMark {
  // postMark = async (req, res) => {
  //   try {
  //     const { teacherId, marks, lessonId } = req.body;
  //     //Validations.
  //     //Check if user exists
  //     // ---------
  //     // להגיד לו לאיזה שדא להכניס ז"א לתוך arrHw??? או שזה כבר מכניס לתוך משהו???
  //     // --------
  //     var query = { _id: ObjectId(lessonId.name) };
  //     // var query = { _id: ObjectId(lessonName) };
  //     let field = lessonId.type === "lessons" ? 'arrHw' : 'marks'
  //     const collection = lessonId.type === "lessons" ? Lessons : Tests
  //     let query2 = { ...query, [field]: { $elemMatch: { studentId: marks.id } } }
  //     if (await collection.findOne(query2))
  //       await collection.updateMany(query2, { $set: { [`${field}.$.mark`]: marks.mark } })
  //     else
  //       await collection.updateMany(query, { $addToSet: { [field]: { studentId: marks.id, mark: marks.mark } } })
  //     // var query = { _id:lessonId };
  //     // let query2 = { ...query, marks: { $elemMatch: { studentId: marks.id } } }
  //     // if (await dbo.collection("lessons").findOne(query2)) 
  //     //   await dbo.collection("lessons").update(query2, { $set: { 'marks.$.mark': marks.mark } })
  //     // else
  //     //   await dbo.collection("lessons").update(query, { $addToSet: { marks: { studentId: marks.id, mark: marks.mark } } })
  //     return res.send();

  //   } catch (error) {
  //     res.status(500).send(error)
  //   }
  // }
  postFile = async (req, res) => {
    try {

      
      const { type, lessonId, studentId, file } = req.body;

      let field = type === "Lessons" ? 'arrHw' : 'marks'
      const collection =type === "Lessons" ? Lessons : Tests

      const obj = { studentId, file }
      console.log(lessonId);
      let l = await collection.findById(lessonId)
      console.log("l.arrHw", l.arrHw);
      l[field].push(obj);
      l.save();
      return res.send();
    } catch (error) {
      console.log(error);
      res.status(500).send(error)
    }
  }

  postMark = async (req, res) => {
    try {
      debugger
      const { type, marks, lessonId } = req.body;
      //Validations.
      //Check if  exists
      // Lessons.findByOneAndUpdate({_id:ObjectId(lessonId),"arrHw.studentId":ObjectId(studentId) }, {
      let field = type === "Lessons" ? 'arrHw' : 'marks'
      const collection =type === "Lessons" ? Lessons : Tests
  
      let l = await collection.findById(lessonId)
      // console.log("********", l);
      let hw = l[field].find(x => x.studentId == marks.id);
      console.log("marks", marks);
      hw.mark = marks.mark;
      // console.log("hw", hw);
      l.save();
      return res.send();
    } catch (error) {
      console.log(error);
      res.status(500).send(error)
    }
  }

  // postMark = async (req, res) => {
  //   try {
  //     debugger
  //     const { teacherId, marks, lessonId } = req.body;
  //     //Validations.
  //     //Check if  exists
  //     // Lessons.findByOneAndUpdate({_id:ObjectId(lessonId),"arrHw.studentId":ObjectId(studentId) }, {
  //     let l= await Tests.findById(lessonId )
  //     console.log("********",l);
  //     let hw = l.marks.find(x=>x.studentId==marks.id);
  //     console.log("marks", marks);
  //     hw.mark = marks.mark;
  //     console.log("hw", hw);
  //      l.save();
  //      return res.send();

  //     // await Lessons.findByOneAndUpdate({ _id: lessonId }, {
  //     //   $push: { arrHw: obj }
  //     //  ,function(err, res) {
  //     //     if (err) throw err;
  //     //     console.log("the file inserted");
  //     //     // const token = generateAccessToken(user);
  //     //     // console.log("token", token);
  //     //     return res.send();
  //     // }
  //     // }
  //     // );
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).send(error)
  //   }
  // }

 
}
module.exports = new PostMark();
