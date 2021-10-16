const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  postTask,
  getTask,
  updateTask,
  deleteTask,
  deleteAllTasks,
} = require('../controllers/tasks');

// ROUTES (/api/v1/...)
// get all tasks
// post a task
// get a single task
// update a task
// delete a task

router.route('/').get(getAllTasks).post(postTask).delete(deleteAllTasks);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
