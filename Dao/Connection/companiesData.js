
var connectionProvider = require('./mySqlConnectionProvider.js');
var companiesData = {

    getAllCompanies: function(callback){

        var connection = connectionProvider.mySqlConnectionProvider.getSqlConnection();

        var companies = [];
        var sqlStatement = "SELECT * FROM companies_data";

        if(connection){

            connection.query(sqlStatement, function(err, rows, fields){

                rows.forEach(function(rows) {

                    companies.push(rows)
                    
                });

                callback(companies);
            });
        }

        connectionProvider.mySqlConnectionProvider.closeSqlConnection(connection);
    }

};

module.exports.companiesData = companiesData;