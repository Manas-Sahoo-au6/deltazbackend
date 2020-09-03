const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chartSchema = new Schema({
  High: { type: Array },
  Low: { type: Array },
  
});

const chart = mongoose.model("chartModal", chartSchema);
module.exports = chart;
