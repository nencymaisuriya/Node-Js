const mongoose = require('mongoose');


const url = "mongodb://localhost:27017/real-estate";

mongoose.connect(url);

const db = mongoose.connection

db.on('connected', () => {
    console.log("Database is conntected...");
})
db.on('error', (err) => {
    console.log("Database is not conntected...", err);
})
db.on('disconnected', () => {
    console.log("Database is Disconntected...");
})

module.exports = db;