const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    title: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
      unique: false,
    },
    content: {
      type: String,
      required: true,
      unique: false,
    },
    publishedYear: {
      type: String,
      required: true,
      unique: false,
    }
  },
  { timestamps: true }
);

//converting the schema into model to use it for creating documents and then exporting it
module.exports = mongoose.model("Article", articleSchema)



