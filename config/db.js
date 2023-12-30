const mongoose = require('mongoose');
require("dotenv").config();

const URI = "mongodb+srv://diffident016:hypermode18@cluster0.ewe91.mongodb.net/randomquotes?retryWrites=true&w=majority"

const connection = mongoose.connect(process.env.mongoUrl || URI);

module.exports = { connection };