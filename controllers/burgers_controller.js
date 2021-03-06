var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burgerName, 0
    ], function() {
      res.redirect("/");
    });
  });
  
  router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: req.body.devour
    }, condition, function() {
      res.redirect("/");
    });
  });

  router.delete("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.remove({
      devoured: req.body.devour
    }, condition, function() {
      res.redirect("/");
    });
  });
  

  
  // router.delete("/:id", function(req, res) {
  //   var condition = "id = " + req.params.id;
  
  //   burger.delete(condition, function(result) {
  //     if (result.affectedRows == 0) {
  //       // If no rows were changed, then the ID must not exist, so 404
  //       return res.status(404).end();
  //     } else {
  //       res.status(200).end();
  //     }
  //   });
  // });
  
  // Export routes for server.js to use.
  module.exports = router;