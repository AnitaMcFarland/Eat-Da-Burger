var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    devoured: function (vals, cb) {
        orm.devoured("eat-da-burger", [
            "burger_name", "devoured"
        ], [vals, false], cb);
    },
    update: function (devoured, id, cb) {
        var condition = "id=" + id;
        orm.update("burgers", {
            devoured: devoured
        }, condition, cb);
    },
    create: function (vals, cb) {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [vals, false], cb);
    },
    update: function (create, id, cb) {
        var condition = "id=" + id;
        orm.update("burgers", {
            devoured: create
        }, condition, cb);
    },
}


module.exports = burger;