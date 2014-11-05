//variable to calculate base meal + tax rate + tip
//subtotal is meal + tax {{}}
//tip is dollar value of the tip convert from percentage
// variable to calculate subtotal + tip
//Tip total ?? Count input for loop
//Meal total ?? Count meal for loop
// avg tip per meal all tips divided by all tips
// Cancel button clears input only ??
// Reset button ??

  function appCtrl($scope) {

  $scope.data = {};


  var mealForm = true;

  $scope.submit = function() {
    //console.log('FormSubmitted: ', $scope.data);
    if ($scope.mealForm.$valid) {
      mealForm = true;
    } else {
      mealForm = false;
    }
  };


    var tip = function() {
      // for loop
      return tip;
    };

   var meal = function(tip,tax) {
      // for loop
      return meal;
    };



     /*  $scope.meal =function(tip,tax) {
      return (meal + tip + tax);
    }; */


    /* $scope.tip = function() {
      // convert percentage to integer parsefloat /100
      return tip;
    }; */
    
  
    

    /* var tax = function() {
      return tax;
    }; */

   /* var subtotal = function(meal,tax) {
      return meal + tax;
    }; */
// create a subtotal variable 
    var subtotal = 0;
    $scope.subtotal = function(meal,tax) {
      if (typeof meal === "undefined" || typeof tax === "undefined") {
        return "";
      }
      var meal = parseInt(meal,10); // Meal is 20
      var tax = parseInt(tax, 10); // tax is 10
      var mealTax = meal * tax/100; // mealtax is 2
      // return mealTax; // subtotal = meal + mealTax;
      subtotal = meal + mealTax;
      // return meal + mealTax;
      return subtotal;
    }; 

    // Calculate Tip
    $scope.tip = function() {
      if (typeof tip === "undefined") {
        return "";
      }
      var tip = parseInt(tip,10);
      return tip;
    } 

    $scope.compute = function(subtotal,tip) {
      return subtotal + tip;
      // subtotal + tip
    };

// $scope.$watch('perMeal', meal);

    $scope.reset = function() {
      $scope.data = {};
      mealForm = true;
    };


  $scope.showForm = function(){
      return mealForm;
    };



      
    

//var meal =
//var tip =
//var subtotal = subtotal + tip;

}

angular
  .module('waitstaffApp',[])
  .controller('appCtrl', appCtrl);
