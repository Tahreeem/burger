var orm = require("../config/orm.js");

var burgerModel = {
    create: function (parameters, cb) {
        orm.insert("burgers_db.burgers", parameters, cb, function (res) {
            cb(res);
        });
    },
    update: function (set, where, cb) {
        orm.update("burgers_db.burgers", set, where, function (res) {
            cb(res);
        });
    },
    all: function (cb) {
        orm.all("burgers_db.burgers", function (res) {
            cb(res);
        });
    }

};

module.exports = burgerModel;
