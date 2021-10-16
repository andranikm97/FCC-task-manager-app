const Task = require('../models/task');
const getAllTasks = async (req, res) => {
  try {
    const existingTasks = await Task.find({});
    res.status(200).json({ existingTasks });
  } catch (error) {
    res.status(500).json({ Message: e });
  }
};

const postTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (e) {
    res.status(500).json({ Message: e });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res
        .status(404)
        .json({ Message: `The requested ID (${taskID}) was not found.` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ Message: error });
  }
};

const updateTask = (req, res) => {
  res.send('update task');
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res
        .status(404)
        .json({ Message: `The requested ID (${taskID}) was not found.` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ Message: error });
  }
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
