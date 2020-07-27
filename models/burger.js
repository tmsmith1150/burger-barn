var orm = require("../config/orm.js");

var burger = {
    all: function(burgerCallback) {
      orm.all("burger", function(res) {
        burgerCallback(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, burgerCallback) {
      orm.create("burger", cols, vals, function(res) {
        burgerCallback(res);
      });
    },
    update: function(objColVals, condition, burgerCallback) {
      orm.update("burger", objColVals, condition, function(res) {
        burgerCallback(res);
      });
    },
    delete: function(condition, burgerCallback) {
      orm.delete("burger", condition, function(res) {
        burgerCallback(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;