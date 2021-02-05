// the module name follows angular.module
let myApp = angular.module("myList", []);

// myApp is now able to grab things from angular module, like below, I am creating an angular controller, its name and a function
myApp.controller("myListController", function ($scope) {
  // every item binded in this controller can be binded to index.html bc the index.html controller is using this one
  $scope.title = "Javascript Frameworks";
  $scope.itemsTwo = ["React.js", "Node.js", "MongoDB", "Vue.js", "Node.js"];
  $scope.items = ["AngularJS", "ReactJS", "VueJS"];
  $scope.newItem = "";
  $scope.myName = "Jared's favorites";
  $scope.wifeName = "joy";
  //   the below function is taking the newitem being typed and pushing it to the items array
  //   it is able to do so bc the newItem is binded to the input
  $scope.pushItem = function () {
    if ($scope.newItem != "") {
      $scope.items.push($scope.newItem);
      $scope.newItem = "";
    }
  };

  $scope.deleteItem = function (index) {
    console.log("deleted");
    $scope.items.splice(index, 1);
  };
});
