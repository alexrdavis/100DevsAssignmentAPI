const homeworkRoutes = require("./homework")

const appRouter = (app, fs) => {
    app.get("/", (req, res) => {
        res.render("index")
    })
    homeworkRoutes(app, fs)
}

module.exports = appRouter;