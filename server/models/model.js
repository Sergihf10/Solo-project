const mongoose = require('./index');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
