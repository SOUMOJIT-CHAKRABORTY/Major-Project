const { mongoose } = require("mongoose");
const Journey = require("./journeyModel");

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  age: Number,
  email: String,
  password: String,
  bookedJourneys: [{ type: mongoose.Schema.Types.ObjectId, ref: "Journey" }],
});
const User = mongoose.model("User", userSchema);

module.exports = User;
