var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(vals, cb) {
    orm.create("eat-da-burger",[
      "burger_name", "devoured"], [vals, false], cb);
  },
  update: function(devoured, id, cb) {
    var condition= "id=" +id;
    orm.update("burgers", {
      devoured: devoured
    }, condition, cb);
  }
};

module.exports = burger;