const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  tittle: {
    type: String,
    required: true,
    minlength: 2,
  },
  author: {
    type: String,
    required: true,
    minlength: 2,
  },
  release: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("book", bookSchema);
