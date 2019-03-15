var connection = require("../config/connection.js");


var orm = {}

orm.insert = function insertBurger(table, parameters, cb) {

    return new Promise(resolve => {

        connection.query(
            "INSERT INTO " + table + " SET ?",
            parameters,
            function (error, results) {
                if (error) throw error;

                parameters.item_id = results.insertId;

                // cb(results);

                resolve(cb(results));
            }
        );
    });
}


orm.update = function updateBurger(table, set, where, cb) {

    return new Promise(resolve => {

        var parameters = [];
        parameters.push(set, where);

        connection.query(
            "UPDATE " + table + " SET ? WHERE ?",
            parameters,
            function (error, results) {
                if (error) throw error;
                
                // cb(results);
                resolve(cb(results));
            }
        );




    });
}



// updateStock(  //updating globally or in database
//     { stock_quantity: resultZero[0].stock_quantity },
//     { item_id: resultZero[0].item_id }
// );


orm.all = function printAllProducts(table, cb) {

    return new Promise(resolve => {

        connection.query(
            "SELECT * FROM " + table,
            function (error, results) {
                if (error) throw error;

                resolve(cb(results));
            });

    });
}

module.exports = orm;