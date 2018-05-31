var myApp = angular.module('myApp', []);

// $scope: object. it is shared object between view and controller.
// all angular js service start with $.
// Dependency Injection

myApp.controller('mainController', function($scope) {

    // adding property or method
    $scope.name = "tony";
    $scope.occupation = "coder";
    $scope.getname = function () {
        return "John Doe";
    }

    $scope.getname();

    console.log($scope);

});