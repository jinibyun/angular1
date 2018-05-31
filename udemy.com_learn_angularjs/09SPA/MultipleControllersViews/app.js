var myApp = angular.module('myApp', []);

// they have their own scope

myApp.controller('mainController', ['$scope', function($scope) {
    
    $scope.name = "Main";
    
}]);


myApp.controller('secondController', ['$scope', function ($scope) {

    $scope.name = "Second";

}]);