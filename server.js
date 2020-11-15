const express = require("express");
const app = express();

// require("./services/quizzes.services.server")(app);
require("./services/questions.services.server")(app);

const quizService = require("./services/quizzes.services.server")
quizService(app);



app.listen(4201);
