const mongoose = require("mongoose");
require("dotenv").config();
var url ="mongodb+srv://sam:k258@cluster0.4rqfg.mongodb.net/guess?retryWrites=true&w=majority";//"mongodb://localhost/travel_destinations";

module.exports = async () => {
  try {
    const connection =
      process.env.MONGO_URL || url
    const connectionParams = {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose
      .connect(connection, connectionParams)
      .then(() => console.log("connection sucessfull"));
  } catch (error) {
    console.log(error);
    console.log("could not connect to database");
  }
};
