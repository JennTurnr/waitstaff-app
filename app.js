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
    var meal = parseFloat(meal); // Meal is 20
    var tax = parseFloat(tax); // tax is 10
    var mealTax = meal * tax / 100; // mealtax is 2
    // return mealTax; // subtotal = meal + mealTax;
    subtotal = meal + mealTax;
    // return meal + mealTax;
    return subtotal;
  };

  // Calculate Tip
  var tip = 0;
  $scope.computeTip = function() {
    if (typeof $scope.tip === "undefined") {
   
      return "";
    }
    
    tip = parseFloat($scope.tip);

    tip = tip * subtotal/ 100;

    return tip;
    //console.log("working");
  };

  // Calculate Total
  var compute = 0;
  $scope.compute = function() {

      
    

    // subtotal = parseInt(total,100);
    //  tip = parseInt(tipping,100);
   /*  subtotal = parseInt(subtotal, 10) || 0;
    tip = parseFloat(tip) || 0; */
    compute = subtotal + tip;
    //console.log(subtotal,tip, compute);
    return compute; 
  };

  $scope.tipTotalCount = 0; // Total dollar amount of tips
  $scope.mealcount = 0; // Total number of meals
  $scope.avgTipPerMeal = 0;  // Average tip per meal
  

  $scope.reset = function() {
    $scope.meal = {};
    $scope.tax = {};
    $scope.tip = {};
    $scope.subtotal = 0;
    $scope.computeTip = 0;
    $scope.compute = 0;
    $scope.mealcount = 0;
    $scope.tipTotalCount = 0;
    $scope.avgTipPerMeal = 0;
    
    
    
    // $scope.data = {};
    // mealForm = true;
    // set $scope variables back to 0
    // console.log("testing 4,3,2,1");
  };


  $scope.showForm = function() {
    return mealForm;
  };



  $scope.submit = function() {
    //console.log("testing");
    $scope.mealcount +=1;
   $scope.tipTotalCount = $scope.tip + $scope.tipTotalCount;
   $scope.avgTipPerMeal = $scope.tipTotalCount / $scope.mealcount;
   return mealcount, tipTotalCount, avgTipPerMeal;
   
   
    // console.log(mealcount);
    // add mealcount +=1
    // add tiptotal to tipTotalCount
    // set avgtippermeal to tipTotalCount / mealCount
    // clear input field

  };



  $scope.cancel = function() {
    $scope.meal = {};
    $scope.tax = {};
    $scope.tip = {};
    $scope.subtotal = 0;
    $scope.computeTip = 0;
    $scope.compute = 0;
    
    
    // $scope.
    //console.log("testing 1,2,3");
  };
}

angular.module('waitstaffApp', [])
  .controller('appCtrl', appCtrl);