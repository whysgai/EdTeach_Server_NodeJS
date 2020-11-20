const express = require("express");
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const quizService = require("./controllers/quizzes.controller")
quizService(app);
require("./controllers/questions.controller")(app);

app.listen(4201);
