const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/School"
mongoose.connect(url);


const db = mongoose.connection;

db.on("connected", () => console.log("database is connected"));
db.on("error", (error) => console.log("database is not connected", error));
db.on("disconnected", () => console.log("database is disconnected"));

