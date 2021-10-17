console.log('Task Manager App');
const express = require('express');
const app = express();
const cors = require('cors');
const tasks = require('./routes/tasks');
require('dotenv').config();

// Middleware
const connectToDB = require('./db/connect');
app.use(cors());
app.use(express.static('./public'));
app.use(express.json());

// Routes
app.use('/api/v1/tasks', tasks);

const port = process.env.PORT;
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
//     app.listen(port, () => {
//       console.log(`Listening on port ${port}`);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };
// startApp();
