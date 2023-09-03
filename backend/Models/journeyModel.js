const { mongoose } = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  date: String,
  paid: Boolean,
});

const Journey = mongoose.model("Journey", courseSchema);

module.exports = Journey;
