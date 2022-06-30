const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  age : { type: String },
  image: { type: String },
  name :{ type: String },
  age :{ type: String },
  url :{ type: String },
  remark :{ type: String },
  created_date: { type: Date, default: Date.now },
  modified_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Image", PostSchema);
