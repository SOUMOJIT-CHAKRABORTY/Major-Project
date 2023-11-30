const express = require("express");
const Train = require("../Models/trainModel");

exports.trainSearch = async (req, res) => {
  const { from, to, date } = req.body;
  try {
    const trains = await Train.find({
      "schedule.station": from,
    });
    const trainsTo = trains.filter((train) => {
      const stations = train.schedule.map((s) => s.station);
      return stations.includes(to);
    });
    // const trainsToOnDate = trainsTo.filter((train) => {
    // const schedules = train.schedule.filter((s) => s.station === from);
    // const dates = schedules.map((s) => s.date);
    // return dates.includes(date);
    // });
    res.json(trainsTo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.trainAutoSuggestions = async (req, res) => {
  const userInput = req.params.input;

  try {
    const stations = await Train.distinct("schedule.station", {
      "schedule.station": { $regex: new RegExp(userInput, "i") },
    });
    res.json({ suggestions: stations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
