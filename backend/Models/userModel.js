const { mongoose } = require("mongoose");
const Journey = require("./journeyModel");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  bookedJourneys: [{ type: mongoose.Schema.Types.ObjectId, ref: "Journey" }],
});
const User = mongoose.model("User", userSchema);

module.exports = User;
