console.log('Task Manager App');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectToDB = require('./db/connect');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/error-handler');

// Middleware
app.use(express.static('./public'));
app.use(express.json());

// Routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandler);

const DB_URI = process.env.MONGO_URI;

connectToDB(DB_URI)
  .then(() => {
    console.log('Connection to DB successful!');
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((e) => console.error(e));

// ANOTHER WAY TO START UP DB BEFORE SERVER
// const startApp = async () => {
//   try {
//     await connectToDB(DB_URI);
//     console.log('Connection to DB successful!');
//     app.listen(port, () => {
//       console.log(`Listening on port ${port}`);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };
// startApp();
