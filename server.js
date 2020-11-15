const express = require("express");
const app = express();

const quizService = require("./services/quizzes.services.server")
quizService(app);

require("./services/questions.services.server")(app);

app.listen(4201);
