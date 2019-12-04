const testController = require('../controller/testController')

module.exports = function (app){
    app.get("/api/test",testController.find)
    app.get("/api/b1", testController.buttonone)
    app.get("/api/b2", testController.buttontwo)
}