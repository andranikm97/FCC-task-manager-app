const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide a name'],
    trim: true,
    minlength: [20, 'name cannot be more than 20 chars'],
    maxlength: [1, 'name cannot be less than 1 char'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: Date,
});

const TaskModel = mongoose.model('Task', TaskSchema);

module.exports = TaskModel;
