var mongoose = require('mongoose'), Admin = mongoose.mongo.Admin;
const Schema = mongoose.Schema;
const ProductSchema = new Schema({}, { strict: false });
var mongoDB = {}
var mongoclient ='';

mongoDB.connect = async (req, res) => {
    try {
        let database_defualt = 'test'
        let state_connect = true
        const { host, port, database} = req.body;
        var data = req.body
        console.log(data)
        if(database === '') {
            database_defualt = database
        }
        
        // let host ='mongodb://localhost:27017/' + database
        var url = 'mongodb://'+ host + ':'+ port + '/' + database_defualt
        mongoclient = await mongoose.createConnection(url, { useNewUrlParser: true,poolSize: 5 }).catch( error => state_connect = false);
        if(!state_connect){
            // throw new 'not connect'
            res.status(200).json({ 'status': false ,'message': 'connect not sucesss'});
        }else{
            mongoclient.on("error", console.error.bind(console, "connection error"));
            mongoclient.once("open", function(callback){
                console.log("Connection Succeeded");
            });
            // var testmodel = mongoclient.model('member',ProductSchema,'member')
            // var dd = await testmodel.findOne({});
            res.status(200).json({ 'status': true ,'message': 'connect sucesss'});
        }
   
    } catch (error) {
        console.log(error)
        res.status(400).json({ 'status': false, 'message': error+mongoclient});
    }
}

mongoDB.find = async (req, res) =>{
    try {
        var testmodel = mongoclient.model('member',ProductSchema,'member')
        var dd = await testmodel.findOne({});
        res.status(200).json({ 'message': dd});
    } catch (error) {
        res.status(400).json({ 'message': error});
    }
}

mongoDB.collectionname = async (req, res) =>{
    try {
        var collectname =  await mongoclient.db.listCollections().toArray();
        res.status(200).json({ 'message': collectname});
    } catch (error) {
        res.status(400).json({ 'message': error});
    }
}

mongoDB.showdbs = async (req, res) =>{
    try {  
        var allDatabases = await new Admin(mongoclient.db).listDatabases()
        // console.log(allDatabases.databases)
        res.status(200).json({ 'message': allDatabases.databases});
    } catch (error) {
        res.status(400).json({ 'message': error});
    }
} 

mongoDB.testconect = async (req, res) =>{
    try {
        
        const { host, port } = req.body;
        var state_test = true;
        var url = 'mongodb://'+ host + ':'+ port + '/test'
        await mongoose.connect(url,{ useNewUrlParser: true }).catch( error  => state_test = false )
        // console.log(state_test)
        if(!state_test) {
            // console.log('error')
            // throw new 'not'
            res.status(200).json({ 'status': false ,'message': url})
        }else{
            res.status(200).json({ 'status': true ,'message': url})
        }
    } catch (error) {
        res.status(400).json({ 'status': false ,'message': error})
    }
}

module.exports = mongoDB;