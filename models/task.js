const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide a name'],
    trim: true,
    maxlength: [20, 'name cannot be less than 20 chars'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const TaskModel = mongoose.model('Task', TaskSchema);

module.exports = TaskModel;
