// let quizzes = require('./quizzes.json')


function service(app){

    const quizzes = [
        {_id: "001", title: "Quiz 1"},
        {_id: "002", title: "Quiz 2"},
        {_id: "003", title: "Quiz 3"},
        {_id: "004", title: "Quiz 4"}
    ]


    app.get("/quizzes", (req, res) => {
        res.send(quizzes);
    })

    app.get("/quizzes/:qid", (req, res) => {
        const quizId = req.params["qid"];
        const quiz = quizzes.find(quiz => quiz._id === quizId);
        res.send(quiz);
    })

}
// const findAllQuizzes = () => quizzes
//
//
//
// const findQuizById = (quizId) =>
//     quizzes.find(quiz => quiz._id === quizId)







module.exports = {
    service
    // ,
    // findAllQuizzes,
    // findQuizById
}
