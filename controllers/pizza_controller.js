const express = require("express");
let router = express.Router();
let pizza = require("../models/pizza.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    pizza.selectAll(function(data) {
    var hbsObject = {
        pizzas: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
    });
});

router.post("/api/pizzas", function(req, res) {
    cat.insertOne([
    "pizza", "polish"
    ], [
    req.body.pizza, req.body.polish
    ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
    });
});

router.put("/api/pizzas/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    pizza.updateAll({
    polish: req.body.polish
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
    