const { mongoose } = require("mongoose"); // Adjust the path accordingly
const Train = require("./Models/trainModel"); // Adjust the path accordingly
const dummyTrainData = require("./dummyData"); // Adjust the path accordingly
const dotenv = require("dotenv");

dotenv.config();

// Connect to the database
const Database = process.env.DATABASE_URI;
mongoose.connect(Database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");

  // Insert dummy data
  Promise.all(dummyTrainData.map((trainData) => new Train(trainData).save()))
    .then(() => {
      console.log("All trains added to the database");
      // Close the connection after inserting data
      mongoose.connection.close();
    })
    .catch((err) => {
      console.error(err);
      // Close the connection in case of an error
      mongoose.connection.close();
    });
});
