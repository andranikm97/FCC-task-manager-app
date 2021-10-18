const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectToDB = (url) => {
  return mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

module.exports = connectToDB;
