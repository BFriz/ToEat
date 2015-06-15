$(function(){
// getting the food and stuff
  // Food.all();
  
});

function View() {};
View.init = function() {
  // food form submit event listener
  $("#food-form").on("submit", function(e){
    // stop page reload
    e.preventDefault();
    // format form data into a query string
    var foodParams = $(this).serialize();
    Food.create(foodParams);
  });
};