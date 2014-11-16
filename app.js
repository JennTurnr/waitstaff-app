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


  var meal = function(tip, tax) {
    // for loop
    return meal;
  };


  // create a subtotal variable 
  var subtotal = 0;
  $scope.subtotal = function(meal, tax) {
    if (typeof meal === "undefined" || typeof tax === "undefined") {
      return "";
    }
    var meal = parseInt(meal, 10); // Meal is 20
    var tax = parseInt(tax, 10); // tax is 10
    var mealTax = meal * tax / 100; // mealtax is 2
    // return mealTax; // subtotal = meal + mealTax;
    subtotal = meal + mealTax;
    // return meal + mealTax;
    return subtotal;
  };

  // Calculate Tip
  var num = 0;
  $scope.num = function(tip) {
    if (typeof tip === "undefined") {
      return "";
    }
    var tip = parseInt(tip, 10);

    num = tip / 100;

    return num;
    //console.log("working");
  };

  // Calculate Total
  var compute = 0;
  $scope.compute = function(subtotal, tip, tax, meal) {
    if (typeof subtotal === "undefined" || typeof tip === "undefined" || typeof tax === "undefined" || typeof meal === "undefined") {
      return "";
    }

    // subtotal = parseInt(total,100);
    //  tip = parseInt(tipping,100);
    subtotal = parseInt(subtotal, 10) || 0;
    tip = parseInt(tip, 10) || 0;
    tax = parseInt(tax, 10) || 0;
    meal = parseInt(meal, 10) || 0;
    compute = subtotal + tip + tax + meal;

    return compute;
  };

  // Tip Count 
  $scope.tipcount = function(tip) {
    var i = 0;
    for (i = 0; i < tip.length; i++) {
      return tip;
    }
    tipcount([tip]);
  };

  var i = 0;
  $scope.mealcount = function(meal) {
    for (i = 0; i < meal.length; i++) {
      return meal;
    }
    mealcount([meal]);
  };


// Average Tip Per meal
var average = 0;
$scope.average = function(tipcount) {
  if (typeof tipcount === "undefined") {
    return "";
  }
  tipcount = parseInt(tipcount,10);
  average = parseInt(average,10);
  average = tipcount/100 || 0;

  return average;

};


  $scope.reset = function() {
    // $scope.data = {};
    // mealForm = true;
    console.log("testing 4,3,2,1");
  };


  $scope.showForm = function() {
    return mealForm;
  };



  $scope.submit = function() {
    console.log("testing");

  };



  $scope.cancel = function() {
    console.log("testing 1,2,3");
  };
}

angular.module('waitstaffApp', [])
  .controller('appCtrl', appCtrl);