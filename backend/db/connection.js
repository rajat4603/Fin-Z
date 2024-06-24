const mongoose = require("mongoose");
const DB_URI =
  "mongodb+srv://mongodb:Rajat4603@cluster0.hmm2ifx.mongodb.net/finance_app_db?retryWrites=true&w=majority";

async function connectDatabase() {
  try {
    mongoose.connect(DB_URI);
    console.log("Connected to database");
  
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
db = mongoose.connection;


module.exports = { connectDatabase };
