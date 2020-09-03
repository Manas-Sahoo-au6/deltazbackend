const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema({
  Name: { type: String, required: true },
  Criteria : { type: String, required: true },
  Value : { type: Number, required: true },
  Everyday : { type: Boolean, required: true },
  Email : { type: String, required: true },
});

const Form = mongoose.model("FormModal", formSchema);
module.exports = Form;
