const express = require("express");
const app = express();

const quizService = require("./services/quizzes.services.server")
quizService(app);



app.listen(4201);
