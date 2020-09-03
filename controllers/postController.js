const FormModel = require("../model/FormModel");
const Chart = require('../model/Chart')
module.exports = {
  postdata: async (req, res) => {
    try {
      const { Name, Criteria, Value, Everyday, Email } = req.body;
      let newPost = await FormModel.create({
        Name,
        Criteria,
        Value,
        Everyday,
        Email,
      });
      return res.status(201).json({ status: "success", data: newPost });
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      let allPosts = await FormModel.find({});
      if (allPosts) {
        return res.status(200).json({ status: "success", data: allPosts });
      }
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
  await FormModel.findOneAndDelete({"_id": req.params.id})
     return res.status(200).json({ status: "success" });
    } catch (err) {
      console.log(err);
    }
  },
  insertData: async (req,res)=>{
  try{
    await Chart.create({
      High:[28, 29, 33, 36, 32, 32, 33],
      Low:[12, 11, 14, 18, 17, 13, 13]

    })
    return res.status(200).json({ status: "success" });
  }
  catch(err){
    console.log(err)
  }



  },
  getChartData: async (req,res)=>{
    try {
      let data = await Chart.find({})
      res.json({data:data})
    }
    catch(err){

    }

    

  }
};
