const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  creationDate: Date,
  status: String,
  projects: {
    title: String,
  },
});

module.exports = mongoose.model('Users', userSchema);
