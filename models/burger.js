//require orm as a const and use appropriate filepath
const orm = require('../config/orm.js');

//now call the orm functions in const burger JSON format
const burger = {
    //first define selactAll
    selectAll: function(cb) {
        orm.selectAll("burger", function(res) {
            cb(res);
        });
    },
    //then define insertOne
    insertOne: function(column, value, cb) {
        orm.insertOne("burger", column, value, function(res) {
            cb(res);
        });
    },
    //aaaaaand define updateOne
    updateOne: function (burgerID, cb) {
        orm.updateOne("burger", "devoured", burgerID, function (res) {
            cb(res);
        });
    }

};
//and export the burger const we created!
module.exports = burger;