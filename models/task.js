const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide a name'],
  },
  completed: Boolean,
  date: Date,
});

const TaskModel = mongoose.model('Task', TaskSchema);

module.exports = TaskModel;
