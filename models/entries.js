// Подключаем mongoose.
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/finam', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const articlesSchema = new mongoose.Schema({
  // categories: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories' },
  title: String,
  content: String,
  username: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model('Article', articlesSchema);
