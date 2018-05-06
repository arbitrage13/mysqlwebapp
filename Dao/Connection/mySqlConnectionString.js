

var mySqlConnectionString = {
    connectionString:{

    development : {
        host: "localhost",
        user: "root",
        password: "password",
        database: "test"
    },
    test : {
        host: "localhost",
        user: "root",
        password: "password",
        database: "test"
    },
    Production : {
        host: "localhost",
        user: "root",
        password: "password",
        database: "test"
    }

    }
        
}
exports.mySqlConnectionString = mySqlConnectionString;