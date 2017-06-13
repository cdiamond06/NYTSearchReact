
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// requires us to use mongoose
var ArticlesSchema = new Schema({
  title: {
    type: String
  },
  url: {
    type: String
  },
  saved: {
    type: Boolean,
    default: true
  },
  // Date is the date of the model when created
  date: {
    type: Date
  }
});

var Article = mongoose.model("Article", ArticlesSchema);
module.exports = Articles;
