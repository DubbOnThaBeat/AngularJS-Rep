(function () {
  "use strict";

  angular.module("LunchCheck", []).controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.listItems = "";
    $scope.output = "";
    $scope.msgColor = "black";
    $scope.textBoxColor = "";

    $scope.checkList = function () {
      var itemsArray = countItems($scope.listItems)
      // console.log(itemsArray);
      if (itemsArray.length <= 3 && itemsArray.length > 0) {
        $scope.output = "Enjoy!";
        $scope.msgColor = "green";
        $scope.textBoxColor = "green";
      }
      else if (itemsArray.length > 3) {
        $scope.output = "Too much!";
        $scope.msgColor = "green";
        $scope.textBoxColor = "green";
      }
      else if (itemsArray.length == 0) {
        $scope.output = "Please enter data first.";
        $scope.msgColor = "red";
        $scope.textBoxColor = "red";
      }
    }

    function countItems(list) {
      var items = list.split(", ")
      for (var i = 0;i < items.length;i++) {
        if (!/[A-Za-z]/.test(items[i])) {
          items.splice(i);
        }
      }
      return items;
    }
  }

})();
