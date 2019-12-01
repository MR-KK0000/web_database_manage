const testController = require('../controller/testController')

module.exports = function (app){
    app.get("/api/test",testController.find)
}