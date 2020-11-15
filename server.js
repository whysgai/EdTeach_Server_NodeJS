const express = require("express");
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const quizService = require("./services/quizzes.services.server")
quizService(app);
require("./services/questions.services.server")(app);

app.listen(4201);
