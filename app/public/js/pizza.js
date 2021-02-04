$("#order-submit").on("click", function(event) {
  event.preventDefault();

  var newOrder = {
    // customer: $("#customer").val().trim(),
    toppings: document.getElementById("toppings").innerHTML,
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newOrder);
  
  $.post("/api/new", newOrder)
    .then(function() {
      var row = $("<div>");
      row.addClass("cool-font");

      row.append("<p>Order submitted!</p>");
      $(".shop-item-details").prepend(row);

      console.log("Order being processed.");
    });
})
