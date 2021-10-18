const Task = require('../models/task');
const asyncWrapper = require('../middleware/asyncWrapper');
const { createCustomError } = require('../errors/customError');

const getAllTasks = asyncWrapper(async (req, res) => {
  const existingTasks = await Task.find({});
  res.status(200).json({ existingTasks, amount: existingTasks.length });
});

const deleteAllTasks = asyncWrapper(async (req, res) => {
  const deletedTasks = await Task.deleteMany({});
  res.status(200).json({ deletedTasks });
});

const postTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return next(
      createCustomError(`The requested ID (${taskID}) was not found.`, 404),
    );
  }

  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return next(
      createCustomError(`The requested ID (${taskID}) was not found.`, 404),
    );
  }

  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true, // return the new value
    runValidators: true, // run validators, check conditions on data types
    useFindAndModify: true,
  });

  if (!task) {
    return next(
      createCustomError(`The requested ID (${taskID}) was not found.`, 404),
    );
  }

  res.status(200).json({ id: taskID, task });
});

module.exports = {
  getAllTasks,
  postTask,
  getTask,
  updateTask,
  deleteTask,
  deleteAllTasks,
};
