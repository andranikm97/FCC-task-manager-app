const Task = require('../models/task');
const getAllTasks = async (req, res) => {
  try {
    const existingTasks = await Task.find({});
    res.status(200).json({ existingTasks });
  } catch (error) {
    res.status(500).send(error);
  }
};

const postTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (e) {
    res.status(500).send(e);
  }
};

const getTask = (req, res) => {
  console.log(req.params);
  res.send(`Requested id: ${req.params.id}`);
};

const updateTask = (req, res) => {
  res.send('update task');
};

const deleteTask = (req, res) => {
  res.send('delete task');
};

const deleteAllTasks = async (req, res) => {
  try {
    const deletedTasks = await Task.deleteMany({});
    res.status(200).json({ deletedTasks });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllTasks,
  postTask,
  getTask,
  updateTask,
  deleteTask,
  deleteAllTasks,
};
