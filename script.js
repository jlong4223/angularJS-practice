// the module name follows angular.module
let myApp = angular.module("myList", []);

// myApp is now able to grab things from angular module, like below, I am creating an angular controller, its name and a function
myApp.controller("myListController", function ($scope) {
  // every item binded in this controller can be binded to index.html bc the index.html controller is using this one
  $scope.items = ["AngularJS", "ReactJS", "VueJS"];
  $scope.newItem = " ";
});
