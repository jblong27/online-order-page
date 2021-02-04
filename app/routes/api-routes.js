// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Add an order
  app.post("/api/new", function(req, res) {
    console.log("New Order data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO orders (toppings, created_at) VALUES (?,?)";

    connection.query(dbQuery, [req.body.toppings, req.body.created_at], function(err, result) {
      if (err) throw err;
      console.log("Order Successfully Submitted");
      res.end();
    });
  });
};