const testController = require('../controller/testController')
const mongoController = require('../controller/mongoController')

module.exports = function (app){
    app.get("/api/test",testController.find)
    app.post("/api/b1", testController.buttonone)
    app.get("/api/b2", testController.buttontwo)

    //mongo
    app.post("/api/mongo/connect", mongoController.connect)
    app.get("/api/mongo/testfind", mongoController.find)
    app.get("/api/mongo/testcollectionname", mongoController.collectionname)
    app.get("/api/mongo/showdbs", mongoController.showdbs)
    app.post("/api/testconnect", mongoController.testconect)
}