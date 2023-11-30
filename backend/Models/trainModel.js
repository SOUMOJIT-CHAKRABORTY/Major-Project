const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  trainName: { type: String, required: true },
  trainNumber: { type: String, required: true },
  runsOn: { type: String, required: true },
  schedule: [
    {
      departureTime: { type: String, required: true },
      station: { type: String, required: true },
      date: { type: Date, required: true },
    },
  ],
  classes: [
    {
      className: { type: String, required: true },
      availability: { type: String, default: "Refresh" },
    },
  ],
});

const Train = mongoose.model("Train", trainSchema);

module.exports = Train;
