var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
let customer = { name: "Axel" };
let card = { amount: 7, product: "Bar", unitprice: 42 };
let message = `Hello ${customer.name}, want to buy ${card.amount} ${card.product} 
for a total of ${card.amount * card.unitprice} bucks?`;


/*var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = "Hello " + customer.name + ",\n" +
"want to buy " + card.amount + " " + card.product + " for\n" +
"a total of " + (card.amount * card.unitprice) + " bucks?";*/



  res.render('index', { title: 'Docker meetup', message: message });
});

module.exports = router;
