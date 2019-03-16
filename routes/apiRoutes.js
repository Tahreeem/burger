var express = require("express");
var burgerModel = require("../models/burgerModel"); //models
({ disconnect } = require("../controllers/burgerController.js")); //controllers
//var Promise = require("bluebird");

//____________________________________________________________________________________________________
var router = express.Router();



router.get("/api/burgers", function (req, res) {

});


router.post("/api/burgers", function (req, res) {

    var parameters = {
        //id: req.body.id,
        burger_name: req.body.burger_name,
        burger_devoured: false
    }

    burgerModel.create(parameters, function (result) {
        res.json(result.insertId);
    });
});

router.put("/api/burgers", function (req, res) {

    var set = { burger_devoured: true };
    var where = { id: req.body.id };

    burgerModel.update(set, where, function (result) {
        res.json(result);
    });
});



//____________________________________________________________________________________________________

module.exports = router;
