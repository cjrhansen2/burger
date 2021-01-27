//require all the necessary files such as burger model and express
//then create the different routes

var burger = require('../models/burger');
const express = require("express");
var router = express.Router();

//and then make the different routes
//define the get route
router.get("/", (req,res) => {
    burger.selectAll(burgerdata => {
        var handBarsObj = {
            burger: burgerdata
        };
        //then render the handlebars object
        res.render("index", handBarsObj);
    });
});

//define how the route puts
router.put("/api/burger/:id", (req,res) => {
    var burgerID = req.params.id;
    burger.updateOne(burgerID, resBurger => {
        //throw a 404 error if the burgerID is not there
        if (resBurger.changedRows == 0) {
            return res.status(404).end();
        }
        //but if it is there throw the 200 status which means ok
        else {
            res.status(200).end();
        }
    });
});

//aaand define the post route
router.post('/api/burger', (req,res) => {
    burger.insertOne('burger_name', req.body.burger_name, burgerRes => {
        res.json({id: burgerRes.insertId});
    });
});

//and then finally, export the routes!
module.exports = router;