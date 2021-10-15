console.log('Task Manager App');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
require('dotenv').config();

// Middleware
const connectToDB = require('./db/connect');
app.use(express.json());

// ROUTES (/api/v1/...)
// get all tasks
// post a task
// get a single task
// update a task
// delete a task

app.get('/', (req, res) => {
  res.send('Task manager app.');
});
app.use('/api/v1/tasks', tasks);

const port = process.env.PORT;
const DB_URI = process.env.MONGO_URI;

// const startApp = async () => {
//   try {
//     await connectToDB(DB_URI);
//     app.listen(port, () => {
//       console.log(`Listening on port ${port}`);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };
// startApp();

connectToDB(DB_URI)
  .then(() => {
    console.log('Connection to DB successful!');
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((e) => console.error(e));
