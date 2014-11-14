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


    /* var tip = function() {
      // for loop
      return tip;
    }; */

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
    var num = 0;
    $scope.num = function(tip) {
      if (typeof tip === "undefined") {
        return "";
      }
      var tip = parseInt(tip,10);
      
      num = tip/100;

      return num;
      //console.log("working");
    }; 

    var compute = 0;
    $scope.compute = function(total) {
      if (typeof subtotal === "undefined" || typeof tip === "undefined") {
        return "";
      }

      var tip = parseInt(tip,1000);
      var total = parseInt(total,10);
    
      total = subtotal + tip;

      return compute;
    };

    // Tip Count 
    var i = 0;
    $scope.tipcount = function(tip) {
      for (i = 0; i < tip.length; i++) {
        return tip;
      }
    };

    var i = 0;
    $scope.mealcount = function(meal) {
      for (i = 0; i < meal.length; i++) {
        return meal;
      }
    };
    // Calculate Total 
   

      // total = subtotal + tip;
      // return total;

    // };
    /* var compute = 0;
    $scope.compute = function(subtotal, tip) {
      if (typeof subtotal === "undefined" || typeof tip === "undefined") {
        return "";
      }

      compute = subtotal + tip;
      return compute;
    };
    /*$scope.compute = function(subtotal,tip) {
      return subtotal + tip;
      // subtotal + tip
    };*/

// $scope.$watch('perMeal', meal);

    $scope.reset = function() {
      //$scope.data = {};
      //mealForm = true;
      console.log("testing 4,3,2,1");
    };


  $scope.showForm = function(){
      return mealForm;
    };



      $scope.submit = function() {
        console.log("testing");

      };

     
    
      $scope.cancel = function() {
        console.log("testing 1,2,3");
      };


//var meal =
//var tip =
//var subtotal = subtotal + tip;

}

angular
  .module('waitstaffApp',[])
  .controller('appCtrl', appCtrl);
