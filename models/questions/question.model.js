const mongoose = require("mongoose");
const questionSchema = require("./question.schema");

const questionModel = mongoose.model("QuestionModel", questionSchema);

module.exports = questionModel;
