const getAllTasks = (req, res) => {
  res.send('all items');
};

const postTask = (req, res) => {
  res.json(req.body);
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

module.exports = {
  getAllTasks,
  postTask,
  getTask,
  updateTask,
  deleteTask,
};
