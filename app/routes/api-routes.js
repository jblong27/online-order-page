// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all orders
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM orders";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add an order
  app.post("/api/new", function(req, res) {
    console.log("New Order data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO ordders (customer, toppings, created_at) VALUES (?,?,?)";

    connection.query(dbQuery, [req.body.customer, req.body.toppings, req.body.created_at], function(err, result) {
      if (err) throw err;
      console.log("Order Successfully Submitted");
      res.end();
    });
  });
};