// Homework route
const homeworkRoutes = (app, fs) => {
    const dataPath = './data/homework.json';

    // helper method
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if(err) {
                throw err
            }
            callback(returnJson ? JSON.parse(data) : data)
        })
    }
    // read entire API
    app.get('/homework', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if(err) {
                throw err;
            }

            res.send(JSON.parse(data))
        })
    })

    // call to specific homework day
    app.get("/homework/:name", (req, res) => {
        readFile(data => {
            const classNumber = req.params.name;

            if(data[classNumber]) {
                res.json(data[classNumber])
            } else {
                res.json(data["unknown"])
            }

        }, true)
    })
}


module.exports = homeworkRoutes;