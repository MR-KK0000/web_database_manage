var databaseConfig = {};

databaseConfig.connection = {
    mongodb: {
        host: 'sleepfreetime-shard-00-00-5kc2c.gcp.mongodb.net:27017,sleepfreetime-shard-00-01-5kc2c.gcp.mongodb.net:27017,sleepfreetime-shard-00-02-5kc2c.gcp.mongodb.net:27017',
        port: '',
        username: 'admin',
        password: 'admin',
        database: 'tqf_sft',
        ssl: true,
        replicaSetName: '&replicaSet=sleepfreetime-shard-0',
        authSource: '&authSource=admin',
    },
}

var db = 'mongodb://' + databaseConfig.connection.mongodb.username + ':' + databaseConfig.connection.mongodb.password + '@' + databaseConfig.connection.mongodb.host + '/' + databaseConfig.connection.mongodb.database + '?ssl=' + databaseConfig.connection.mongodb.ssl + databaseConfig.connection.mongodb.replicaSetName + databaseConfig.connection.mongodb.authSource + '&retryWrites=true';
// local database
//var collection = '';
//var db = 'mongodb://localhost:27017/' + collection
databaseConfig.getConnectionConfig = {
    mongodb: db
}

module.exports = databaseConfig;

// mongo "mongodb://sleepfreetime-shard-00-00-5kc2c.gcp.mongodb.net:27017,sleepfreetime-shard-00-01-5kc2c.gcp.mongodb.net:27017,sleepfreetime-shard-00-02-5kc2c.gcp.mongodb.net:27017/test?replicaSet=sleepfreetime-shard-0" --ssl --authenticationDatabase admin --username admin --password admin