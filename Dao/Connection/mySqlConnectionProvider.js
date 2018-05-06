



var mysql = require('mysql');
var mySqlConnectionString = require('./mySqlConnectionString.js');
var mySqlConnectionProvider = {
    
    getSqlConnection : function(){

     var connection = mysql.createConnection(mySqlConnectionString.mySqlConnectionString.connectionString.development)
    
     connection.connect(function(error){

        if(error){
            throw (error)
        }
        console.log("MySql connection completed");
     });

        return connection;


    },
    closeSqlConnection : function(currentConnection){
        currentConnection.end(function(error){
            if(error){throw error}
            console.log("Connection Closed");
        })

    }

};
exports.mySqlConnectionProvider = mySqlConnectionProvider