const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectToDB = (url) => {
  return mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

module.exports = connectToDB;
