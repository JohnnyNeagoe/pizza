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

router.post('/pizzas', function(req, res) {
    pizza.insertOne([
      'pizza_name'
    ], [
      req.body.pizza_name
    ], function(data) {
      res.redirect('/');
    });
  });

  router.put('/pizzas/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
  
    pizza.updateOne({
      polished: true
    }, condition, function(data) {
      res.redirect('/');
    });
  });

// Export routes for server.js to use.
module.exports = router;
    